export interface Player { 
  Name: string,
  Type: string,
  Subtype: string,
  Position: number, 
  Status: string,
  Repeat: string,
  Shuffle: string,
  Track: { 
    Title: string,
    Album: string,
    TrackNumber: number, 
    Artist: string,
    NumberOfTracks: number, 
    Duration: number 
  }, 
  Device: string
}