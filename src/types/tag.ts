export enum TagType {
  taste = 'taste',
  goal = 'goal'
}

export type Tag = {
  id: number
  name: string
  tag_type: TagType
}
