import PriceOption from "./PriceOption";

const gymFeatures = [
    {
      id: 1,
      name: "Personal Training",
      feature: [
        "One-on-one sessions",
        "Certified trainers",
        "Customized workout plans"
      ],
      price: 5000 // in BDT or your preferred currency
    },
    {
      id: 2,
      name: "Group Classes",
      feature: [
        "Zumba",
        "Yoga",
        "HIIT",
        "Pilates"
      ],
      price: 3000
    },
    {
      id: 3,
      name: "Gym Access",
      feature: [
        "24/7 access",
        "Card-based entry system",
        "Unlimited visits"
      ],
      price: 2000
    },
    {
      id: 4,
      name: "Wellness & Recovery",
      feature: [
        "Steam room",
        "Sauna",
        "Massage therapy",
        "Post-workout recovery zone"
      ],
      price: 4000
    },
    {
      id: 5,
      name: "Nutrition Support",
      feature: [
        "Custom meal plans",
        "Diet consultations",
        "Supplement advice"
      ],
      price: 2500
    },
    {
      id: 6,
      name: "Equipment & Facilities",
      feature: [
        "Modern cardio machines",
        "Free weights section",
        "Functional training area"
      ],
      price: 1500
    },
    {
      id: 7,
      name: "Member Services",
      feature: [
        "Personal lockers",
        "Shower rooms",
        "Towel service"
      ],
      price: 1000
    },
    {
      id: 8,
      name: "Progress Tracking",
      feature: [
        "Monthly fitness assessments",
        "Body composition analysis",
        "Workout tracking app"
      ],
      price: 1800
    }
  ];
  
  

const PriceOptions = () => { 
    return (
        <div className="grid md:grid-cols-3 gap-y-4 mt-6" >
           {
            gymFeatures.map(gym=><PriceOption key={gym.id} gymInfo ={gym} ></PriceOption>)
           }
        </div>
    );
};

export default PriceOptions;