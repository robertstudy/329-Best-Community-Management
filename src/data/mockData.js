export const services = [
  {
    id: 1,
    name: "Wedding Ceremonies",
    category: "event-based",
    description: "Beautiful wedding ceremonies with complete setup and coordination",
    price: "$500-2000",
    duration: "4-8 hours",
    image: "",
    features: ["Venue setup", "Ceremony coordination", "Basic decorations", "Sound system"]
  },
  {
    id: 2,
    name: "Funeral Services",
    category: "event-based",
    description: "Compassionate funeral services with full support for families",
    price: "$300-1500",
    duration: "2-4 hours",
    image: "",
    features: ["Memorial setup", "Family support", "Coordination", "Flowers arrangement"]
  },
  {
    id: 3,
    name: "Community Meetings",
    category: "event-based",
    description: "Professional meeting spaces with audio/visual equipment",
    price: "$50-200",
    duration: "2-6 hours",
    image: "",
    features: ["Meeting room", "A/V equipment", "Refreshments", "Setup/cleanup"]
  },
  {
    id: 4,
    name: "Equipment Rentals",
    category: "event-based",
    description: "Tables, chairs, tents, and other event equipment",
    price: "$25-500",
    duration: "1-3 days",
    image: "",
    features: ["Tables & chairs", "Tents", "Sound equipment", "Delivery included"]
  },
  {
    id: 5,
    name: "Catering Services",
    category: "event-based",
    description: "Delicious catering for events of all sizes",
    price: "$15-50 per person",
    duration: "Event duration",
    image: "",
    features: ["Custom menus", "Professional service", "Setup/cleanup", "Dietary accommodations"]
  },

  {
    id: 6,
    name: "Spanish Classes",
    category: "educational",
    description: "Learn Spanish with experienced native speakers",
    price: "$20-40 per class",
    duration: "1-2 hours",
    image: "",
    features: ["All skill levels", "Native speakers", "Small groups", "Cultural activities"]
  },
  {
    id: 7,
    name: "Arts & Crafts Workshops",
    category: "educational",
    description: "Creative workshops for all ages and skill levels",
    price: "$15-35 per session",
    duration: "2-3 hours",
    image: "",
    features: ["All materials included", "Expert instruction", "Take home projects", "Group discounts"]
  },
  {
    id: 8,
    name: "Painting Classes",
    category: "educational",
    description: "Explore your artistic side with guided painting sessions",
    price: "$25-45 per class",
    duration: "2-3 hours",
    image: "",
    features: ["Canvas & paints included", "Professional instruction", "All skill levels", "Wine & paint options"]
  },

  {
    id: 9,
    name: "Home Care Services",
    category: "external",
    description: "Compassionate in-home care for elderly and disabled individuals",
    price: "$20-35 per hour",
    duration: "2-24 hours",
    image: "",
    features: ["Licensed caregivers", "Personal care", "Companionship", "Light housekeeping"]
  },
  {
    id: 10,
    name: "Shuttle Services",
    category: "external",
    description: "Safe and reliable transportation for community members",
    price: "$5-25 per trip",
    duration: "30 minutes - 2 hours",
    image: "",
    features: ["Door-to-door service", "Wheelchair accessible", "Medical appointments", "Shopping trips"]
  }
];

export const events = [
  {
    id: 1,
    title: "Community Health Fair",
    date: "2024-11-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Community Center",
    description: "Free health screenings, vaccinations, and wellness information",
    category: "health",
    image: ""
  },
  {
    id: 2,
    title: "Holiday Food Drive",
    date: "2024-12-01",
    time: "9:00 AM - 6:00 PM",
    location: "Multiple Locations",
    description: "Help us collect food donations for families in need",
    category: "charity",
    image: ""
  },
  {
    id: 3,
    title: "Senior Citizens Dance",
    date: "2024-11-22",
    time: "2:00 PM - 5:00 PM",
    location: "Community Hall",
    description: "Afternoon of music, dancing, and refreshments for seniors",
    category: "social",
    image: ""
  },
  {
    id: 4,
    title: "Youth Art Exhibition",
    date: "2024-12-10",
    time: "6:00 PM - 9:00 PM",
    location: "Art Gallery",
    description: "Showcase of artwork created by local youth in our programs",
    category: "arts",
    image: ""
  },
  {
    id: 5,
    title: "Financial Literacy Workshop",
    date: "2024-11-30",
    time: "10:00 AM - 12:00 PM",
    location: "Education Center",
    description: "Learn budgeting, saving, and investment basics",
    category: "education",
    image: ""
  }
];

export const volunteers = [
  {
    id: 1,
    name: "Maria Rodriguez",
    email: "maria.r@email.com",
    phone: "(555) 123-4567",
    skills: ["Spanish Translation", "Event Coordination", "Childcare"],
    availability: "Weekends",
    hoursLogged: 45,
    joinDate: "2024-01-15"
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 234-5678",
    skills: ["Transportation", "Handyman", "Cooking"],
    availability: "Weekday Evenings",
    hoursLogged: 32,
    joinDate: "2024-02-20"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "(555) 345-6789",
    skills: ["Teaching", "Arts & Crafts", "Administration"],
    availability: "Flexible",
    hoursLogged: 67,
    joinDate: "2023-11-10"
  },
  {
    id: 4,
    name: "David Chen",
    email: "david.chen@email.com",
    phone: "(555) 456-7890",
    skills: ["IT Support", "Photography", "Social Media"],
    availability: "Weekends",
    hoursLogged: 28,
    joinDate: "2024-03-05"
  }
];

export const donations = [
  {
    id: 1,
    donorName: "Anonymous",
    amount: 500,
    date: "2024-10-20",
    type: "monetary",
    purpose: "General Fund",
    recurring: false
  },
  {
    id: 2,
    donorName: "Local Business Corp",
    amount: 1200,
    date: "2024-10-18",
    type: "monetary",
    purpose: "Youth Programs",
    recurring: true
  },
  {
    id: 3,
    donorName: "Smith Family",
    amount: 250,
    date: "2024-10-15",
    type: "monetary",
    purpose: "Senior Services",
    recurring: false
  },
  {
    id: 4,
    donorName: "Community Church",
    amount: 800,
    date: "2024-10-12",
    type: "monetary",
    purpose: "Food Bank",
    recurring: true
  },
  {
    id: 5,
    donorName: "Anonymous",
    amount: 150,
    date: "2024-10-10",
    type: "monetary",
    purpose: "Emergency Fund",
    recurring: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Elena Martinez",
    service: "Spanish Classes",
    rating: 5,
    comment: "The Spanish classes have been wonderful! The instructors are patient and the community atmosphere makes learning enjoyable.",
    date: "2024-09-15"
  },
  {
    id: 2,
    name: "Robert Thompson",
    service: "Home Care Services",
    rating: 5,
    comment: "The care my mother receives is exceptional. The staff is professional, caring, and reliable. Highly recommended!",
    date: "2024-09-20"
  },
  {
    id: 3,
    name: "Lisa Park",
    service: "Wedding Ceremony",
    rating: 5,
    comment: "Best Community Services made our wedding day perfect. Everything was organized beautifully and the staff was amazing.",
    date: "2024-08-30"
  },
  {
    id: 4,
    name: "Michael Davis",
    service: "Community Meeting",
    rating: 4,
    comment: "Great facilities for our neighborhood association meetings. Clean, well-equipped, and affordable.",
    date: "2024-09-10"
  }
];

export const announcements = [
  {
    id: 1,
    title: "New Spanish Class Schedule",
    content: "We're excited to announce expanded Spanish class offerings starting November 1st. New beginner and intermediate classes available.",
    date: "2024-10-22",
    priority: "medium",
    category: "programs"
  },
  {
    id: 2,
    title: "Holiday Hours",
    content: "Please note our modified hours during the holiday season. We will be closed November 28-29 and December 24-25.",
    date: "2024-10-20",
    priority: "high",
    category: "operations"
  },
  {
    id: 3,
    title: "Volunteer Appreciation Event",
    content: "Join us December 15th for our annual volunteer appreciation dinner. RSVP required by December 10th.",
    date: "2024-10-18",
    priority: "low",
    category: "events"
  },
  {
    id: 4,
    title: "New Partnership with Local Hospital",
    content: "We're proud to announce our new partnership with City General Hospital to provide enhanced health services to our community.",
    date: "2024-10-15",
    priority: "medium",
    category: "partnerships"
  }
];

export const rooms = [
  {
    id: 1,
    name: "Main Conference Room",
    capacity: 50,
    features: ["Projector", "Sound System", "WiFi", "Whiteboard"],
    hourlyRate: 25,
    availability: {
      "2024-10-24": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
      "2024-10-25": ["11:00 AM", "1:00 PM", "4:00 PM", "5:00 PM"],
      "2024-10-26": ["9:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"]
    }
  },
  {
    id: 2,
    name: "Community Hall",
    capacity: 150,
    features: ["Stage", "Sound System", "Kitchen Access", "Tables & Chairs"],
    hourlyRate: 75,
    availability: {
      "2024-10-24": ["6:00 PM", "7:00 PM"],
      "2024-10-25": ["10:00 AM", "2:00 PM", "6:00 PM"],
      "2024-10-26": ["9:00 AM", "1:00 PM", "5:00 PM"]
    }
  },
  {
    id: 3,
    name: "Classroom A",
    capacity: 25,
    features: ["Whiteboard", "WiFi", "Chairs", "Storage"],
    hourlyRate: 15,
    availability: {
      "2024-10-24": ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
      "2024-10-25": ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
      "2024-10-26": ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM"]
    }
  }
];

export const equipment = [
  {
    id: 1,
    name: "Round Tables (8-person)",
    quantity: 20,
    available: 18,
    dailyRate: 5,
    category: "furniture",
    description: "Perfect for events and gatherings"
  },
  {
    id: 2,
    name: "Folding Chairs",
    quantity: 200,
    available: 185,
    dailyRate: 1,
    category: "furniture",
    description: "Comfortable seating for any event"
  },
  {
    id: 3,
    name: "Sound System with Microphones",
    quantity: 3,
    available: 2,
    dailyRate: 50,
    category: "audio",
    description: "Professional sound system for events"
  },
  {
    id: 4,
    name: "Projector & Screen",
    quantity: 5,
    available: 4,
    dailyRate: 30,
    category: "visual",
    description: "HD projector with portable screen"
  },
  {
    id: 5,
    name: "Party Tent (20x20)",
    quantity: 4,
    available: 3,
    dailyRate: 75,
    category: "outdoor",
    description: "Weather protection for outdoor events"
  }
];

export const employees = [
  {
    id: 1,
    name: "Jennifer Lopez",
    position: "Program Director",
    department: "Programs",
    email: "j.lopez@bestcommunity.org",
    phone: "(555) 111-2222",
    hireDate: "2022-03-15",
    salary: 55000,
    status: "active"
  },
  {
    id: 2,
    name: "Carlos Mendez",
    position: "Community Outreach Coordinator",
    department: "Outreach",
    email: "c.mendez@bestcommunity.org",
    phone: "(555) 222-3333",
    hireDate: "2023-01-20",
    salary: 45000,
    status: "active"
  },
  {
    id: 3,
    name: "Amanda White",
    position: "Administrative Assistant",
    department: "Administration",
    email: "a.white@bestcommunity.org",
    phone: "(555) 333-4444",
    hireDate: "2023-06-10",
    salary: 35000,
    status: "active"
  },
  {
    id: 4,
    name: "Thomas Brown",
    position: "Facilities Manager",
    department: "Operations",
    email: "t.brown@bestcommunity.org",
    phone: "(555) 444-5555",
    hireDate: "2021-11-05",
    salary: 48000,
    status: "active"
  }
];

export const analyticsData = {
  totalDonations: 15750,
  totalVolunteers: 45,
  totalServices: 127,
  totalEvents: 23,
  monthlyDonations: [
    { month: "Jan", amount: 2500 },
    { month: "Feb", amount: 3200 },
    { month: "Mar", amount: 2800 },
    { month: "Apr", amount: 3500 },
    { month: "May", amount: 4100 },
    { month: "Jun", amount: 3800 },
    { month: "Jul", amount: 4200 },
    { month: "Aug", amount: 3900 },
    { month: "Sep", amount: 4500 },
    { month: "Oct", amount: 3750 }
  ],
  serviceUsage: [
    { service: "Spanish Classes", usage: 85 },
    { service: "Home Care", usage: 92 },
    { service: "Community Meetings", usage: 67 },
    { service: "Arts & Crafts", usage: 73 },
    { service: "Wedding Services", usage: 45 }
  ],
  volunteerHours: [
    { month: "Jan", hours: 120 },
    { month: "Feb", hours: 145 },
    { month: "Mar", hours: 132 },
    { month: "Apr", hours: 167 },
    { month: "May", hours: 189 },
    { month: "Jun", hours: 201 },
    { month: "Jul", hours: 178 },
    { month: "Aug", hours: 156 },
    { month: "Sep", hours: 194 },
    { month: "Oct", hours: 172 }
  ]
};
