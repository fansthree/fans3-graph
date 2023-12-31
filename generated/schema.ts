// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Subject extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Subject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Subject must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Subject", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Subject | null {
    return changetype<Subject | null>(store.get("Subject", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value!.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get shareAmount(): BigInt {
    let value = this.get("shareAmount");
    return value!.toBigInt();
  }

  set shareAmount(value: BigInt) {
    this.set("shareAmount", Value.fromBigInt(value));
  }
}

export class Fan extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Fan entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Fan must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Fan", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Fan | null {
    return changetype<Fan | null>(store.get("Fan", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get holds(): Array<Bytes> | null {
    let value = this.get("holds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set holds(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("holds");
    } else {
      this.set("holds", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }
}
