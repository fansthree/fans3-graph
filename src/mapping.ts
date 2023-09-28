import { Trade as TradeEvent } from '../generated/Fans3Shares/Fans3Shares';
import { Fan, Subject } from '../generated/schema';

export function handleTrade(event: TradeEvent): void {
  let subject = Subject.load(event.params.subject.toHex());
  if (subject == null) {
    // first create
    subject = new Subject(event.params.subject.toHex());
    subject.shareAmount = event.params.shareAmount;
    subject.address = event.params.subject.toHex();
    subject.save();
    return;
  }
  if (event.params.isBuy) {
    subject.supply -= event.params.shareAmount;
  } else {
    subject.supply += event.params.shareAmount;
  }
  subject.save();

  let fan = Fan.load(event.params.trader.toHex());
  if (fan == null) {
    fan = new Fan(event.params.trader.toHex());
    fan.address = event.params.trader.toHex();
  }
  fan.save();
}
