Todo: 
Make filter sidebar for home page,
Make a Title search bar on navigation bar,
Make an Author search bar on navigation bar,
Link to Home page on Song Page,
Link to individual song my query paramters,
Set up a postgresql database for Tag feature,
Set up Prisma Schemas,
Create AWS S3 bucket for project,
set up AWS RDS,

song={
  title,
  author,
  music_mp3, //link to aws s3 bucket
  sheet_music_pdf, //link to aws s3 bucket
  length, //in seconds
  createdOn,
  updatedOn,
  LastViewedOn,
  tags:{
    origin: [],
    region: [],
    state: [],
    subject: [],
    songType: [],
    schoolGradeLevel: [],
    tonalCenter: [],
    scale: [],
    toneSet: [],
    melodicRange: [],
    melodicElement: [],
    melodicMotive: [],
    rhythmicElement: [],
    meter: [],
    formType: [],
    formalAnalysis: [],
    gameType: [],
  }
}



tables needed:

model Song {
  id        String     @id @default(cuid())
  title     String
  author    String
  mp3       Float
  pdf       String
  length    Integer
  Tag       Tag[]
}




    model Origin{
      id String @id @default(cuid())
      songId   String
    }
    model region{
      id String @id @default(cuid())
      songId   String
    }
    model state{
      id String @id @default(cuid())
      songId   String
    }
    model subject{
      id String @id @default(cuid())
      songId   String
    }
    model songType{
      id String @id @default(cuid())
      songId   String
    }
    model schoolGradeLevel{
      id String @id @default(cuid())
      songId   String
    }
    model tonalCenter{
      id String @id @default(cuid())
      songId   String
    }
    model scale{
      id String @id @default(cuid())
      songId   String
    }
    model toneSet{
      id String @id @default(cuid())
      songId   String
    }
    model melodicRange{
      id String @id @default(cuid())
      songId   String
    }
    model melodicElement{
      id String @id @default(cuid())
      songId   String
    }
    model melodicMotive{
      id String @id @default(cuid())
      songId   String
    }
    model rhythmicElement{
      id String @id @default(cuid())
      songId   String
    }
    model meter{
      id String @id @default(cuid())
      songId   String
    }
    model formType{
      id String @id @default(cuid())
      songId   String
    }
    model formalAnalysis{
      id String @id @default(cuid())
      songId   String
    }
    model gameType{
      id String @id @default(cuid())
      songId   String
    }