import { useEffect, useState } from "react";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";

const API_BASE =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2511-FTB-CT-WEB-PT/guests";

/* Placeholder data used as a fallback if the API request fails */
const PLACEHOLDER_GUESTS = [
  {
    id: 1,
    name: "Edmond Steuber",
    email: "Edmond.Steuber@example.com",
    phone: "466-489-9248 x348",
    bio: "Enjoys meeting new people and talking about product design.",
    job: "Product Designer",
  },

  {
    id: 2,
    name: "Nichole Luettgen",
    email: "Nichole_Luettgen43@example.org",
    phone: "1-333-579-6094 x83316",
    bio: "Loves hiking, coffee, and clean code.",
    job: "Software Engineer",
  },

  {
    id: 3,
    name: "Idell Mayert",
    email: "Idell_Mayert@example.org",
    phone: "583-250-0421 x9996",
    bio: "Writes data pipelines and reads sci-fi in free time.",
    job: "Data Engineer",
  },

  {
    id: 4,
    name: "Elyse Rath",
    email: "Elyse_Rath@example.net",
    phone: "(805) 768-9474",
    bio: "Passionate about customer experience and usability.",
    job: "UX Researcher",
  },

  {
    id: 5,
    name: "Emie Breitenberg",
    email: "Emie_Breitenberg2@example.net",
    phone: "(789) 242-4319 x81157",
    bio: "Organizes events and runs community meetups.",
    job: "Program Manager",
  },

  {
    id: 6,
    name: "Dante Gerhold",
    email: "Dante_Gerhold50@example.org",
    phone: "1-383-356-1556 x94696",
    bio: "Enjoys mentoring and building internal tools.",
    job: "Engineering Manager",
  },

  {
    id: 7,
    name: "Rubie Schroeder",
    email: "Rubie_Schroeder@example.com",
    phone: "428-291-4845 x23450",
    bio: "Always curious — learning a new framework every month.",
    job: "Frontend Developer",
  },

  {
    id: 8,
    name: "Magali Shanahan",
    email: "Magali_Shanahan@example.com",
    phone: "(291) 872-9310 x7182",
    bio: "Loves spreadsheets and metrics dashboards.",
    job: "Analyst",
  },

  {
    id: 9,
    name: "Keven Kertzmann",
    email: "Keven_Kertzmann@example.net",
    phone: "710.991.0976 x97567",
    bio: "Enjoys performance tuning and system design.",
    job: "Backend Engineer",
  },

  {
    id: 10,
    name: "Candido Glover",
    email: "Candido_Glover55@example.org",
    phone: "(839) 570-3037 x79930",
    bio: "Focuses on testing, reliability, and automation.",
    job: "QA Engineer",
  },
];

/* Data Fetch from API */

// Fetch all guests from API
async function fetchGuests() {
  try {
    const response = await fetch(API_BASE);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Guest list fetch failed, using placeholder.");
    return PLACEHOLDER_GUESTS;
  }
}

// Fetch single guest from API
async function fetchGuestById(id) {
  try {
    const response = await fetch(`${API_BASE}/${id}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Guest details fetch failed.");
    return null;
  }
}

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  // Fetch guest list on load from API
  useEffect(() => {
    async function loadGuests() {
      const data = await fetchGuests();
      setGuests(data);
    }
    loadGuests();
  }, []);

  // Handle full guest details when a guest is selected
  async function handleSelectGuest(guest) {
    const fullGuest = await fetchGuestById(guest.id);
    setSelectedGuest(fullGuest);
  }

  // If a guest is selected, show details
  if (selectedGuest) {
    return (
      <GuestDetails
        guest={selectedGuest}
        onBack={() => setSelectedGuest(null)}
      />
    );
  }

  // Otherwise show list
  return <GuestList guests={guests} onSelectGuest={handleSelectGuest} />;
}
