export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  callout?: string;
  listItems?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  tags: string[];
  sections: BlogSection[];
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "cinema4d-octane-lookdev-masterclass",
    title: "Mastering 3D LookDev with Cinema 4D & Octane Render",
    subtitle: "A practical guide to node-based texturing, subsurface dispersion, and lighting rigs for broadcast commercial anthems.",
    date: "Oct 14, 2026",
    category: "3D LookDev",
    readTime: "5 min read",
    coverImage: "/blogs/wave1.jpg",
    author: {
      name: "Gaurav Doliya",
      role: "Graphic & Motion Designer",
      avatar: "/img.jpg",
    },
    excerpt: "Achieving cinematic photorealism in 3D motion graphics by understanding micro-surface imperfections, Octane nodes, and light bounce.",
    tags: ["3D LookDev", "Octane"],
    sections: [
      {
        heading: "1. The Anatomy of Surface Imperfections",
        paragraphs: [
          "In 3D production, perfection is the enemy of realism. Real-world surfaces possess microscopic scratches, dust particles, and oily smudges that define how specular highlights roll off an object's curvature.",
          "When setting up Octane Universal Materials, always feed roughness maps through Color Correction and Gradient nodes. Subtly driving roughness between 0.08 and 0.22 breaks up artificial reflections and adds natural tactile depth to metallic and chrome geometries."
        ],
        callout: "Pro Tip: Never use pure black (0,0,0) or pure white (255,255,255) for base albedo colors. Real physical pigments reflect between 4% and 82% of incident light."
      },
      {
        heading: "2. Sculpting Volume with 3-Point Studio Rigs",
        paragraphs: [
          "Lighting is where a 3D asset transforms into high-end art. Rather than relying on generic HDRI dome maps, construct a custom three-point studio lighting stage inside Octane.",
          "Use a large, diffused Key Area Light placed at a 45-degree angle with a warm 4500K color temperature. Counteract this with a crisp, cool Rim Area Light (6500K) set at high intensity behind the subject to carve out silhouette edges against dark environments."
        ],
        listItems: [
          "Key Light: 4500K softbox texture with falloff set to inverse square.",
          "Rim / Kicker: 6500K linear tube light to accentuate geometric silhouette contours.",
          "Fill / Bounce: Low-powered ambient reflector sheet to recover shadow details."
        ]
      },
      {
        heading: "3. Camera Optics and Depth of Field",
        paragraphs: [
          "To replicate the look of high-end cinema glass like Cooke or ARRI Master Primes, set your Octane Camera focal length to 85mm or 105mm with an aperture of f/2.4.",
          "Enable thin-lens camera depth of field and dial in optical bokeh. Pairing shallow depth of field with subtle Octane spectral dispersion produces iridescent optical fringing that mimics premium anamorphic lenses."
        ],
        callout: "Remember: Great lookdev isn't about making everything glow; it's about leading the viewer's eye exactly where the brand story lives."
      }
    ]
  },
  {
    id: "2",
    slug: "kinetic-typography-brand-identity",
    title: "The Power of Kinetic Typography in Modern Brand Identities",
    subtitle: "How spatial easing curves, variable fonts, and rhythmic pacing turn static type into compelling brand stories.",
    date: "Sep 28, 2026",
    category: "Motion Design",
    readTime: "4 min read",
    coverImage: "/blogs/wave2.jpg",
    author: {
      name: "Gaurav Doliya",
      role: "Graphic & Motion Designer",
      avatar: "/img.jpg",
    },
    excerpt: "Exploring the latest trends in kinetic easing curves, variable typography, and fluid micro-interactions.",
    tags: ["Typography", "Motion"],
    sections: [
      {
        heading: "1. Motion as Brand DNA",
        paragraphs: [
          "Typography is no longer confined to static print layouts. From mobile app splash screens to 3D out-of-home billboards, typography is experienced dynamically in time and physical space.",
          "When designing motion identities, we treat velocity curves and easing transitions as core brand assets—just as recognizable as the logo mark or signature color palette."
        ],
        callout: "The speed at which a letterform snaps into place communicates whether a brand is playful, authoritative, or ultra-modern."
      },
      {
        heading: "2. The Magic of Non-Linear Speed Graphs",
        paragraphs: [
          "Default linear motion feels robotic and lifeless. To inject kinetic energy, manipulate keyframe bezier handles in After Effects or Cinema 4D graph editors.",
          "A classic commercial rhythm uses an aggressive initial acceleration (easing in at 85% influence) followed by an extended, luxurious deceleration curve. This delivers impactful punch on entry with buttery-smooth readability on settling."
        ],
        listItems: [
          "Avoid uniform keyframe spacing across multiple words or characters.",
          "Stagger letter animations with a 2-frame offset to generate organic cascade waves.",
          "Utilize optical tracking adjustments as type scales into perspective."
        ]
      },
      {
        heading: "3. Spatial Stacking & Dimensional Depth",
        paragraphs: [
          "Layering typography across foreground, midground, and background planes creates palpable visual hierarchy.",
          "By passing geometric type behind translucent 3D elements and slicing text with sharp mask transitions, kinetic type becomes a tactile architectural element that viewers can feel."
        ]
      }
    ]
  },
  {
    id: "3",
    slug: "davinci-resolve-color-grading-commercials",
    title: "Commercial Color Grading: Elevating Narrative Moods in DaVinci",
    subtitle: "Colorist workflow breakdown: ACES color management, node tree architectures, and skin tone fidelity.",
    date: "Aug 19, 2026",
    category: "Color Science",
    readTime: "6 min read",
    coverImage: "/blogs/wave3.jpg",
    author: {
      name: "Gaurav Doliya",
      role: "Graphic & Motion Designer",
      avatar: "/img.jpg",
    },
    excerpt: "How structured ACES node trees and color theory turn raw captured footage into broadcast-grade visual spectacle.",
    tags: ["Color Grading", "DaVinci"],
    sections: [
      {
        heading: "1. Building a Bulletproof Node Tree",
        paragraphs: [
          "Efficiency and non-destructive grading depend on a disciplined node tree structure. Avoid cramming exposure, white balance, and creative look tweaks into a single serial node.",
          "A professional pipeline separates technical corrections from stylistic looks: starting with Input Color Space transforms (ACEScc), proceeding to exposure balance, parallel primary grade curves, isolated skin tone qualifiers, and finally print-film emulation."
        ],
        callout: "Discipline in your node tree allows instant client revisions without breaking downstream secondary isolations."
      },
      {
        heading: "2. Protecting Skin Tone Integrity",
        paragraphs: [
          "The human eye is genetically programmed to detect unnatural skin tones. Even in heavily stylized neon or cyberpunk color palettes, the subject's skin vector must adhere closely to the skin tone indicator line on the vectorscope.",
          "By employing parallel node branches with clean 3D qualifiers and soft feathering, you can inject deep violet and teal split-tones into shadows and highlights without corrupting natural flesh vibrancy."
        ],
        listItems: [
          "Check the skin tone vector angle: roughly 10:30 on the vectorscope display.",
          "Utilize subtle Hue vs Saturation curves to desaturate extreme reds and magentas.",
          "Apply film grain exclusively to midtones to maintain pristine shadow and highlight roll-off."
        ]
      },
      {
        heading: "3. Delivery Standards for Broadcast & Digital",
        paragraphs: [
          "A master grade must hold up across calibrated cinema monitors, OLED smartphone displays, and compressed social media streaming platforms.",
          "Always verify REC.709 Gamma 2.4 and Rec.709-A tags to ensure gamma consistency between macOS QuickTime and web browsers."
        ]
      }
    ]
  }
];
