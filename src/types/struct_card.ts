interface StructID {
  name: string;
}

interface TickID {
  value: string;
}

interface StructCard {
  structId: StructID;
  hasStdOut: boolean;
  hasStdErr: boolean;
  tick: TickID;
}

export { StructID, StructCard };
