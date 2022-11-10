interface StructID {
  name: string;
}

interface TickID {
  value: string;
}

interface StructCard {
  structId: StructID;
  tags: { [id: string]: boolean };
  tick: TickID;
}

export { StructID, StructCard };
