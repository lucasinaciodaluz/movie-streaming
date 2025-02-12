import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export type MovieInput = {
    title: string,
    votes: number,
    description: string,
    duration: number,
    image: string
}

const movieData: MovieInput[] = [
    {
       title: "The Batman",
       votes: 78378,
       description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
       duration: 160,
       image: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
       title: "Batman Begins",
       votes: 78378,
       description: "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
       duration: 180,
       image: "https://image.tmdb.org/t/p/original/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg"
    },
    {
       title: "Batman: Hush",
       votes: 645645,
       description: "A mysterious new villain known only as Hush uses a gallery of villains to destroy Batman's crime-fighting career as well as Bruce Wayne's personal life, which has been further complicated by a relationship with Selina Kyle/Catwoman.",
       duration: 160,
       image: "https://image.tmdb.org/t/p/original/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg"
    },
    {
       title: "Batman Returns",
       votes: 6451,
       description: "While Batman deals with a deformed man calling himself the Penguin, an employee of a corrupt businessman transforms into the Catwoman.",
       duration: 150,
       image: "https://image.tmdb.org/t/p/original/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg"
    },
    {
       title: "Batman Forever",
       votes: 41657,
       description: "Batman must battle a disfigured district attorney and a disgruntled former employee with help from an amorous psychologist and a young circus acrobat.",
       duration: 200,
       image: "https://image.tmdb.org/t/p/original/mzzNBVwTiiY94xAXDMWJpNPW2US.jpg"
    },
    {
       title: "Batman & Robin",
       votes: 23112,
       description: "Batman and Robin deal with relationship issues while preventing Mr. Freeze and Poison Ivy from attacking Gotham City.",
       duration: 210,
       image: "https://image.tmdb.org/t/p/original/cGRDufDDSrFrv7VI4YnmWnslne0.jpg"
    },
    {
       title: "Batman v Superman: Dawn of Justice",
       votes: 412312,
       description: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
       duration: 655,
       image: "https://image.tmdb.org/t/p/original/5UsK3grJvtQrtzEgqNlDljJW96w.jpg"
    },
    {
       title: "Batman: Bad Blood",
       votes: 6346,
       description: "Bruce Wayne is missing. Alfred covers for him while Nightwing and Robin patrol Gotham City in his stead and a new player, Batwoman, investigates Batman's disappearance.",
       duration: 214,
       image: "https://image.tmdb.org/t/p/original/1UmPJWfaivtNjsScJqcsbsQRGNY.jpg"
    },
    {
       title: "Superman/Batman: Apocalypse",
       votes: 3545,
       description: "Batman discovers a mysterious teen-aged girl with superhuman powers and a connection to Superman. When the girl comes to the attention of Darkseid, the evil overlord of Apokolips, events take a decidedly dangerous turn.",
       duration: 120,
       image: "https://image.tmdb.org/t/p/original/d7gHmsA2o5Z1MhcuspMyOSO48KB.jpg"
    },
    {
       title: "The Lego Batman Movie",
       votes: 9768,
       description: "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
       duration: 300,
       image: "https://image.tmdb.org/t/p/original/snGwr2gag4Fcgx2OGmH9otl6ofW.jpg"
    },
    {
       title: "Batman: Soul of the Dragon",
       votes: 85675,
       description: "Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.",
       duration: 200,
       image: "https://image.tmdb.org/t/p/original/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg"
    },
    {
       title: "Batman: The Long Halloween, Part Two",
       votes: 5677,
       description: "As Gotham City's young vigilante, the Batman, struggles to pursue a brutal serial killer, district attorney Harvey Dent gets caught in a feud involving the criminal family of the Falcones.",
       duration: 244,
       image: "https://image.tmdb.org/t/p/original/5X1n5q08mZ7NpNpxehMFODxfNYq.jpg"
    },
    {
       title: "Batman: The Long Halloween, Part One",
       votes: 85675,
       description: "Following a brutal series of murders taking place on Halloween, Thanksgiving, and Christmas, Gotham City's young vigilante known as the Batman sets out to pursue the mysterious serial killer alongside police officer James Gordon and district attorney Harvey Dent.",
       duration: 410,
       image: "https://image.tmdb.org/t/p/original/sR7gppb0YGjwLvE6Vnj6wYv5MnW.jpg"
    },
    {
       title: "Batman: The Killing Joke",
       votes: 8567,
       description: "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
       duration: 160,
       image: "https://image.tmdb.org/t/p/original/nxncAAL1FUKtQWs4uhs5jf1MVut.jpg"
    },
    {
       title: "Superman/Batman: Public Enemies",
       votes: 856756,
       description: "United States President Lex Luthor uses the oncoming trajectory of a Kryptonite meteor to frame Superman and declare a $1 billion bounty on the heads of the Man of Steel and his ‘partner in crime’, Batman. Heroes and villains alike launch a relentless pursuit of Superman and Batman, who must unite—and recruit help—to try and stave off the action-packed onslaught, stop the meteor Luthors plot.",
       duration: 140,
       image: "https://image.tmdb.org/t/p/original/izvMc22ywSLFWUXZEIuJJ8dms75.jpg"
    },
    {
       title: "Batman: Gotham Knight",
       votes: 23425,
       description: "A collection of key events mark Bruce Wayne's life as he journeys from beginner to Dark Knight.",
       duration: 240,
       image: "https://image.tmdb.org/t/p/original/weCFATAA8ntBRRgLkIcbz4EFsLl.jpg"
    },
    {
       title: "Batman: Assault on Arkham",
       votes: 2342,
       description: "Batman works desperately to find a bomb planted by the Joker while Amanda Waller sends her newly-formed Suicide Squad to break into Arkham Asylum and recover vital information stolen by the Riddler.",
       duration: 230,
       image: "https://image.tmdb.org/t/p/original/mmQZekxr9gJ7c0Grkx6xgKvrpDy.jpg"
    },
    {
       title:  "Son of Batman",
       votes:  17104,
       description  : "Batman learns he has a violent, unruly pre-teen son, secretly raised by the terrorist group known as The League of Assassins.",      
       duration:  150,
       image:  "https://image.tmdb.org/t/p/original/yHx8OLSKc3VtIBB5lIe90c0fHOX.jpg"
    },
    {
       title:  "Batman and Harley Quinn",
       votes:  24516,
       description:  "Batman and Nightwing are forced to team with the Joker's sometimes-girlfriend Harley Quinn to stop a global threat brought about by Poison Ivy and Jason Woodrue, the Floronic Man.",      
       duration:  145,
       image:  "https://image.tmdb.org/t/p/original/zrqIPpbqCgrs1rS0ltxNicJcuse.jpg"
    },
    {
       title:  "Batman: Under the Red Hood",
       votes:  24765,
       description:  "One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code.",
       duration:  200,
       image:  "https://image.tmdb.org/t/p/original/7lmHqHg1rG9b4U8MjuyQjmJ7Qm0.jpg"
    }
 ]

async function main() {
  console.log(`Start seeding ...`)
  for (const movie of movieData) {
    const movieCreated = await prisma.movie.create({
        data: { 
            title: movie.title,
            votes: movie.votes,
            description: movie.description,
            duration: movie.duration,
            image: movie.image 
        },
    });
    console.log(`Created movie with id: ${movieCreated.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
