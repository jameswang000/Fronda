import PlantInfo from "../../components/ItemDisplay";
import CelestialWhisperImage from "../../images/Celestial-Whisper.png";
import TranquilVeilImage from "../../images/Tranquil-Veil.png";
import GreenCascadeImage from "../../images/Green-Cascade.png";
import SunstoneSucculentImage from "../../images/Sunstone-Succulent.png";
import MidnightSerpentImage from "../../images/Midnight-Serpent.png";
import EmeraldLoomImage from "../../images/Emerald-Loom.png";
import RubyRippleImage from "../../images/Ruby-Ripple.png";
import AuroraFernImage from "../../images/Aurora-Fern.png";
import ShadowVelvetImage from "../../images/Shadow-Velvet.png";
import CoralVineImage from "../../images/Coral-Vine.png";
import FrostleafPrayerImage from "../../images/Frostleaf-Prayer.png";

const items: PlantInfo[] = [
  {
    src: CelestialWhisperImage,
    alt: "Celestial Whisper Plant",
    name: "Celestial Whisper",
    description: "Wing-shaped leaves with a silvery shimmer.",
    price: 29.99,
    itemId: 0,
  },
  {
    src: TranquilVeilImage,
    alt: "Tranquil Veil Plant",
    name: "Tranquil Veil",
    description: "Air-purifying and calming with soft white blooms.",
    price: 19.99,
    itemId: 1,
  },
  {
    src: GreenCascadeImage,
    alt: "Green Cascade Plant",
    name: "Green Cascade",
    description: "Trailing strands of playful, pearl-like leaves.",
    price: 14.99,
    itemId: 2,
  },
  {
    src: SunstoneSucculentImage,
    alt: "Sunstone Succulent Plant",
    name: "Sunstone Succulent",
    description: "Rosettes of fleshy leaves that blush orange in the sun.",
    price: 9.99,
    itemId: 3,
  },
  {
    src: MidnightSerpentImage,
    alt: "Midnight Serpent Plant",
    name: "Midnight Serpent",
    description:
      "Upright, architectural leaves with dark green, mottled patterns.",
    price: 24.99,
    itemId: 4,
  },
  {
    src: EmeraldLoomImage,
    alt: "Emerald Loom Plant",
    name: "Emerald Loom",
    description: "Intricate, web-like veins on deep emerald green leaves.",
    price: 21.99,
    itemId: 5,
  },
  {
    src: RubyRippleImage,
    alt: "Ruby Ripple Plant",
    name: "Ruby Ripple",
    description:
      "Corrugated, heart-shaped leaves with a stunning deep red hue.",
    price: 18.99,
    itemId: 6,
  },
  {
    src: AuroraFernImage,
    alt: "Aurora Fern Plant",
    name: "Aurora Fern",
    description:
      "Delicate, feathery fronds that unfurl in a vibrant lime green.",
    price: 16.99,
    itemId: 7,
  },
  {
    src: ShadowVelvetImage,
    alt: "Shadow Velvet Plant",
    name: "Shadow Velvet",
    description: "Lush, velvety leaves so dark they appear almost black.",
    price: 34.99,
    itemId: 8,
  },
  {
    src: CoralVineImage,
    alt: "Coral Vine Plant",
    name: "Coral Vine",
    description: "A climbing vine with unique, coral-shaped pink flowers.",
    price: 22.99,
    itemId: 9,
  },
  {
    src: FrostleafPrayerImage,
    alt: "Frostleaf Prayer Plant",
    name: "Frostleaf Prayer",
    description:
      "Leaves fold upwards at night, displaying frosted, intricate patterns.",
    price: 27.99,
    itemId: 10,
  },
];

export default items;
