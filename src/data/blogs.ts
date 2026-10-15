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
    tags: ["3D LookDev", "Octane", "Cinema 4D"],
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
    excerpt: "Exploring the latest trends in kinetic easing curves, variable typography, and fluid micro-interactions for modern branding.",
    tags: ["Typography", "Motion", "After Effects"],
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
    tags: ["Color Grading", "DaVinci", "ACES"],
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
  },
  {
    id: "4",
    slug: "procedural-world-building-geometry-nodes",
    title: "Procedural World-Building with Geometry Nodes & Generative Systems",
    subtitle: "Harnessing algorithmic scattering, recursive math vectors, and field modifiers to construct infinite abstract landscapes.",
    date: "Jul 12, 2026",
    category: "Procedural 3D",
    readTime: "7 min read",
    coverImage: "/blogs/wave4.jpg",
    author: {
      name: "Gaurav Doliya",
      role: "Graphic & Motion Designer",
      avatar: "/img.jpg",
    },
    excerpt: "Building high-performance procedural environments using field-based math nodes, weight distributions, and real-time instancing.",
    tags: ["Geometry Nodes", "Blender", "Procedural"],
    sections: [
      {
        heading: "1. The Shift to Non-Destructive Modifiers",
        paragraphs: [
          "Gone are the days of manual polygon sculpting for dense environmental set dressings. Modern production demands responsive asset generation that can pivot instantly when art directors change camera paths.",
          "Geometry nodes treat geometries as pure data attributes—positions, normals, tangents, and point clouds that can be mapped via Perlin noise curves and gradient vectors."
        ],
        callout: "When your topology is purely algorithmic, altering terrain height or object density takes seconds rather than days."
      },
      {
        heading: "2. Optimizing Point Clouds for Heavy Instancing",
        paragraphs: [
          "Displaying millions of geometric instances can bring even 64GB workstations to a halt. The key lies in camera-frustum culling and distance-based LOD (Level of Detail) node groups.",
          "By calculating the vector dot product between the camera ray and terrain normals, we can automatically discard backface points and decimate geometry outside the active frame."
        ],
        listItems: [
          "Implement frustum culling before feeding points into the Instance on Points node.",
          "Store random seed integers as point attributes for varied shader permutations.",
          "Use Raycast nodes to dynamically conform foliage roots to shifting procedural ground."
        ]
      }
    ]
  },
  {
    id: "5",
    slug: "sound-design-kinetic-motion-graphics",
    title: "Sound Design for Motion: The Invisible Half of Kinetic Storytelling",
    subtitle: "Why audio transients, sub-bass impacts, and granular textures dictate perceived animation velocity.",
    date: "Jun 24, 2026",
    category: "Audio Craft",
    readTime: "5 min read",
    coverImage: "/blogs/wave5.jpg",
    author: {
      name: "Gaurav Doliya",
      role: "Graphic & Motion Designer",
      avatar: "/img.jpg",
    },
    excerpt: "How pairing rhythmic riser frequencies, tactile Foley clicks, and whooshes elevates 3D motion into visceral experiences.",
    tags: ["Sound Design", "Audio Craft", "Foley"],
    sections: [
      {
        heading: "1. The Psychological Weight of Frequency",
        paragraphs: [
          "A stunning 3D metallic sphere falling into place looks hollow without low-end sub-frequency weight. The human brain perceives visual velocity and mass largely through corresponding acoustic feedback.",
          "By layering an 808 sub-drop (40Hz–80Hz) with a crisp mechanical latch sound at the exact apex of deceleration, the visual element gains immediate physical consequence."
        ],
        callout: "Audio doesn't accompany motion—it completes the physical illusion that light and pixels alone cannot achieve."
      },
      {
        heading: "2. Micro-Whooshes & Kinetic Timing",
        paragraphs: [
          "Syncing sound effects 1 or 2 frames *before* the visual strike prepares the spectator's nervous system for impact, amplifying the perceived punch.",
          "Synthesizing customized white-noise sweeps and pitched Doppler whooshes helps lead the viewer's eye along rapid camera moves and whip-pan transitions."
        ],
        listItems: [
          "Pre-shift riser audio by 24ms to 48ms to prime the listener's focus.",
          "Use high-pass filters on background beds to leave sonic space for transient hits.",
          "Automate stereo panning directly alongside 3D camera tracker coordinates."
        ]
      }
    ]
  },
  {
    id: "6",
    slug: "unreal-engine-realtime-vfx-commercials",
    title: "Directing Real-Time VFX: Unreal Engine 5 for Commercial LookDev",
    subtitle: "Lumen global illumination, Nanite micro-geometry, and virtual camera tracking in modern broadcast pipelines.",
    date: "May 08, 2026",
    category: "Real-Time VFX",
    readTime: "6 min read",
    coverImage: "/blogs/wave6.jpg",
    author: {
      name: "Gaurav Doliya",
      role: "Graphic & Motion Designer",
      avatar: "/img.jpg",
    },
    excerpt: "Bridging the gap between traditional pre-rendered 3D motion design and zero-wait real-time game engine production.",
    tags: ["Unreal Engine 5", "Real-Time", "VFX"],
    sections: [
      {
        heading: "1. Zero-Render Waiting: The Real-Time Revolution",
        paragraphs: [
          "Waiting 4 hours for an Octane render pass to finish just to spot an erroneous shadow angle is rapidly becoming obsolete. Unreal Engine 5's Lumen illumination engine provides dynamic bounce lighting at 60 FPS.",
          "This immediate visual feedback loop allows motion directors to iterate on framing, material refractions, and atmosphere in front of clients in real time."
        ],
        callout: "Real-time production transforms 3D design from a slow batch-rendering process into an interactive digital film set."
      },
      {
        heading: "2. Cinematic Virtual Cameras (VCam)",
        paragraphs: [
          "By pairing an iPad running Unreal VCam with live AR tracking, designers can physically walk around a digital set, introducing natural handheld camera micro-jitters, organic zoom pulls, and realistic parallax that is notoriously difficult to keyframe manually."
        ],
        listItems: [
          "Leverage Nanite virtualization for multi-million polygon CAD models without baking normal maps.",
          "Utilize Post-Process volumes for custom anamorphic flare distortion and chromatic aberration.",
          "Export final high-resolution EXR sequences with Movie Render Queue for composite finishing."
        ]
      }
    ]
  }
];
