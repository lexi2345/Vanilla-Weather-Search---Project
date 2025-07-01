// City database with timezones
const cities = [
  {
    name: "Atlanta",
    country: "United States",
    state: "Georgia",
    fullName: "Atlanta, Georgia, United States",
    timezone: "America/New_York",
  },
  {
    name: "New York",
    country: "United States",
    state: "New York",
    fullName: "New York, New York, United States",
    timezone: "America/New_York",
  },
  {
    name: "Los Angeles",
    country: "United States",
    state: "California",
    fullName: "Los Angeles, California, United States",
    timezone: "America/Los_Angeles",
  },
  {
    name: "Chicago",
    country: "United States",
    state: "Illinois",
    fullName: "Chicago, Illinois, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Houston",
    country: "United States",
    state: "Texas",
    fullName: "Houston, Texas, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Phoenix",
    country: "United States",
    state: "Arizona",
    fullName: "Phoenix, Arizona, United States",
    timezone: "America/Phoenix",
  },
  {
    name: "Philadelphia",
    country: "United States",
    state: "Pennsylvania",
    fullName: "Philadelphia, Pennsylvania, United States",
    timezone: "America/New_York",
  },
  {
    name: "San Antonio",
    country: "United States",
    state: "Texas",
    fullName: "San Antonio, Texas, United States",
    timezone: "America/Chicago",
  },
  {
    name: "San Diego",
    country: "United States",
    state: "California",
    fullName: "San Diego, California, United States",
    timezone: "America/Los_Angeles",
  },
  {
    name: "Dallas",
    country: "United States",
    state: "Texas",
    fullName: "Dallas, Texas, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Austin",
    country: "United States",
    state: "Texas",
    fullName: "Austin, Texas, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Miami",
    country: "United States",
    state: "Florida",
    fullName: "Miami, Florida, United States",
    timezone: "America/New_York",
  },
  {
    name: "Seattle",
    country: "United States",
    state: "Washington",
    fullName: "Seattle, Washington, United States",
    timezone: "America/Los_Angeles",
  },
  {
    name: "Denver",
    country: "United States",
    state: "Colorado",
    fullName: "Denver, Colorado, United States",
    timezone: "America/Denver",
  },
  {
    name: "Boston",
    country: "United States",
    state: "Massachusetts",
    fullName: "Boston, Massachusetts, United States",
    timezone: "America/New_York",
  },
  {
    name: "Las Vegas",
    country: "United States",
    state: "Nevada",
    fullName: "Las Vegas, Nevada, United States",
    timezone: "America/Los_Angeles",
  },
  {
    name: "Portland",
    country: "United States",
    state: "Oregon",
    fullName: "Portland, Oregon, United States",
    timezone: "America/Los_Angeles",
  },
  {
    name: "Nashville",
    country: "United States",
    state: "Tennessee",
    fullName: "Nashville, Tennessee, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Memphis",
    country: "United States",
    state: "Tennessee",
    fullName: "Memphis, Tennessee, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Louisville",
    country: "United States",
    state: "Kentucky",
    fullName: "Louisville, Kentucky, United States",
    timezone: "America/New_York",
  },

  // Multiple Georgias
  {
    name: "Tbilisi",
    country: "Georgia",
    state: "",
    fullName: "Tbilisi, Georgia (Country)",
    timezone: "Asia/Tbilisi",
  },
  {
    name: "Batumi",
    country: "Georgia",
    state: "",
    fullName: "Batumi, Georgia (Country)",
    timezone: "Asia/Tbilisi",
  },
  {
    name: "Kutaisi",
    country: "Georgia",
    state: "",
    fullName: "Kutaisi, Georgia (Country)",
    timezone: "Asia/Tbilisi",
  },
  {
    name: "Columbus",
    country: "United States",
    state: "Georgia",
    fullName: "Columbus, Georgia, United States",
    timezone: "America/New_York",
  },
  {
    name: "Augusta",
    country: "United States",
    state: "Georgia",
    fullName: "Augusta, Georgia, United States",
    timezone: "America/New_York",
  },
  {
    name: "Savannah",
    country: "United States",
    state: "Georgia",
    fullName: "Savannah, Georgia, United States",
    timezone: "America/New_York",
  },
  {
    name: "Athens",
    country: "United States",
    state: "Georgia",
    fullName: "Athens, Georgia, United States",
    timezone: "America/New_York",
  },
  {
    name: "Macon",
    country: "United States",
    state: "Georgia",
    fullName: "Macon, Georgia, United States",
    timezone: "America/New_York",
  },

  // Multiple Woodstocks
  {
    name: "Woodstock",
    country: "United States",
    state: "New York",
    fullName: "Woodstock, New York, United States",
    timezone: "America/New_York",
  },
  {
    name: "Woodstock",
    country: "United States",
    state: "Georgia",
    fullName: "Woodstock, Georgia, United States",
    timezone: "America/New_York",
  },
  {
    name: "Woodstock",
    country: "United States",
    state: "Illinois",
    fullName: "Woodstock, Illinois, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Woodstock",
    country: "United States",
    state: "Vermont",
    fullName: "Woodstock, Vermont, United States",
    timezone: "America/New_York",
  },
  {
    name: "Woodstock",
    country: "Canada",
    state: "Ontario",
    fullName: "Woodstock, Ontario, Canada",
    timezone: "America/Toronto",
  },
  {
    name: "Woodstock",
    country: "Canada",
    state: "New Brunswick",
    fullName: "Woodstock, New Brunswick, Canada",
    timezone: "America/Halifax",
  },
  {
    name: "Woodstock",
    country: "United Kingdom",
    state: "England",
    fullName: "Woodstock, Oxfordshire, England",
    timezone: "Europe/London",
  },

  // Major world cities
  {
    name: "London",
    country: "United Kingdom",
    state: "England",
    fullName: "London, England, United Kingdom",
    timezone: "Europe/London",
  },
  {
    name: "Paris",
    country: "France",
    state: "",
    fullName: "Paris, France",
    timezone: "Europe/Paris",
  },
  {
    name: "Berlin",
    country: "Germany",
    state: "",
    fullName: "Berlin, Germany",
    timezone: "Europe/Berlin",
  },
  {
    name: "Rome",
    country: "Italy",
    state: "",
    fullName: "Rome, Italy",
    timezone: "Europe/Rome",
  },
  {
    name: "Madrid",
    country: "Spain",
    state: "",
    fullName: "Madrid, Spain",
    timezone: "Europe/Madrid",
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    state: "",
    fullName: "Amsterdam, Netherlands",
    timezone: "Europe/Amsterdam",
  },
  {
    name: "Vienna",
    country: "Austria",
    state: "",
    fullName: "Vienna, Austria",
    timezone: "Europe/Vienna",
  },
  {
    name: "Prague",
    country: "Czech Republic",
    state: "",
    fullName: "Prague, Czech Republic",
    timezone: "Europe/Prague",
  },
  {
    name: "Budapest",
    country: "Hungary",
    state: "",
    fullName: "Budapest, Hungary",
    timezone: "Europe/Budapest",
  },
  {
    name: "Warsaw",
    country: "Poland",
    state: "",
    fullName: "Warsaw, Poland",
    timezone: "Europe/Warsaw",
  },
  {
    name: "Stockholm",
    country: "Sweden",
    state: "",
    fullName: "Stockholm, Sweden",
    timezone: "Europe/Stockholm",
  },
  {
    name: "Oslo",
    country: "Norway",
    state: "",
    fullName: "Oslo, Norway",
    timezone: "Europe/Oslo",
  },
  {
    name: "Copenhagen",
    country: "Denmark",
    state: "",
    fullName: "Copenhagen, Denmark",
    timezone: "Europe/Copenhagen",
  },
  {
    name: "Helsinki",
    country: "Finland",
    state: "",
    fullName: "Helsinki, Finland",
    timezone: "Europe/Helsinki",
  },
  {
    name: "Moscow",
    country: "Russia",
    state: "",
    fullName: "Moscow, Russia",
    timezone: "Europe/Moscow",
  },
  {
    name: "St. Petersburg",
    country: "Russia",
    state: "",
    fullName: "St. Petersburg, Russia",
    timezone: "Europe/Moscow",
  },

  // Asia
  {
    name: "Tokyo",
    country: "Japan",
    state: "",
    fullName: "Tokyo, Japan",
    timezone: "Asia/Tokyo",
  },
  {
    name: "Osaka",
    country: "Japan",
    state: "",
    fullName: "Osaka, Japan",
    timezone: "Asia/Tokyo",
  },
  {
    name: "Beijing",
    country: "China",
    state: "",
    fullName: "Beijing, China",
    timezone: "Asia/Shanghai",
  },
  {
    name: "Shanghai",
    country: "China",
    state: "",
    fullName: "Shanghai, China",
    timezone: "Asia/Shanghai",
  },
  {
    name: "Hong Kong",
    country: "Hong Kong",
    state: "",
    fullName: "Hong Kong",
    timezone: "Asia/Hong_Kong",
  },
  {
    name: "Seoul",
    country: "South Korea",
    state: "",
    fullName: "Seoul, South Korea",
    timezone: "Asia/Seoul",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    state: "",
    fullName: "Bangkok, Thailand",
    timezone: "Asia/Bangkok",
  },
  {
    name: "Singapore",
    country: "Singapore",
    state: "",
    fullName: "Singapore",
    timezone: "Asia/Singapore",
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    state: "",
    fullName: "Kuala Lumpur, Malaysia",
    timezone: "Asia/Kuala_Lumpur",
  },
  {
    name: "Jakarta",
    country: "Indonesia",
    state: "",
    fullName: "Jakarta, Indonesia",
    timezone: "Asia/Jakarta",
  },
  {
    name: "Manila",
    country: "Philippines",
    state: "",
    fullName: "Manila, Philippines",
    timezone: "Asia/Manila",
  },
  {
    name: "Mumbai",
    country: "India",
    state: "",
    fullName: "Mumbai, India",
    timezone: "Asia/Kolkata",
  },
  {
    name: "Delhi",
    country: "India",
    state: "",
    fullName: "Delhi, India",
    timezone: "Asia/Kolkata",
  },
  {
    name: "Bangalore",
    country: "India",
    state: "",
    fullName: "Bangalore, India",
    timezone: "Asia/Kolkata",
  },
  {
    name: "Chennai",
    country: "India",
    state: "",
    fullName: "Chennai, India",
    timezone: "Asia/Kolkata",
  },
  {
    name: "Kolkata",
    country: "India",
    state: "",
    fullName: "Kolkata, India",
    timezone: "Asia/Kolkata",
  },
  {
    name: "Hyderabad",
    country: "India",
    state: "",
    fullName: "Hyderabad, India",
    timezone: "Asia/Kolkata",
  },

  // Australia & Oceania
  {
    name: "Sydney",
    country: "Australia",
    state: "New South Wales",
    fullName: "Sydney, New South Wales, Australia",
    timezone: "Australia/Sydney",
  },
  {
    name: "Melbourne",
    country: "Australia",
    state: "Victoria",
    fullName: "Melbourne, Victoria, Australia",
    timezone: "Australia/Melbourne",
  },
  {
    name: "Brisbane",
    country: "Australia",
    state: "Queensland",
    fullName: "Brisbane, Queensland, Australia",
    timezone: "Australia/Brisbane",
  },
  {
    name: "Perth",
    country: "Australia",
    state: "Western Australia",
    fullName: "Perth, Western Australia, Australia",
    timezone: "Australia/Perth",
  },
  {
    name: "Adelaide",
    country: "Australia",
    state: "South Australia",
    fullName: "Adelaide, South Australia, Australia",
    timezone: "Australia/Adelaide",
  },
  {
    name: "Canberra",
    country: "Australia",
    state: "ACT",
    fullName: "Canberra, ACT, Australia",
    timezone: "Australia/Sydney",
  },
  {
    name: "Auckland",
    country: "New Zealand",
    state: "",
    fullName: "Auckland, New Zealand",
    timezone: "Pacific/Auckland",
  },
  {
    name: "Wellington",
    country: "New Zealand",
    state: "",
    fullName: "Wellington, New Zealand",
    timezone: "Pacific/Auckland",
  },

  // Africa
  {
    name: "Cairo",
    country: "Egypt",
    state: "",
    fullName: "Cairo, Egypt",
    timezone: "Africa/Cairo",
  },
  {
    name: "Lagos",
    country: "Nigeria",
    state: "",
    fullName: "Lagos, Nigeria",
    timezone: "Africa/Lagos",
  },
  {
    name: "Johannesburg",
    country: "South Africa",
    state: "",
    fullName: "Johannesburg, South Africa",
    timezone: "Africa/Johannesburg",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    state: "",
    fullName: "Cape Town, South Africa",
    timezone: "Africa/Johannesburg",
  },
  {
    name: "Casablanca",
    country: "Morocco",
    state: "",
    fullName: "Casablanca, Morocco",
    timezone: "Africa/Casablanca",
  },
  {
    name: "Nairobi",
    country: "Kenya",
    state: "",
    fullName: "Nairobi, Kenya",
    timezone: "Africa/Nairobi",
  },
  {
    name: "Addis Ababa",
    country: "Ethiopia",
    state: "",
    fullName: "Addis Ababa, Ethiopia",
    timezone: "Africa/Addis_Ababa",
  },

  // South America
  {
    name: "São Paulo",
    country: "Brazil",
    state: "",
    fullName: "São Paulo, Brazil",
    timezone: "America/Sao_Paulo",
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    state: "",
    fullName: "Rio de Janeiro, Brazil",
    timezone: "America/Sao_Paulo",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    state: "",
    fullName: "Buenos Aires, Argentina",
    timezone: "America/Argentina/Buenos_Aires",
  },
  {
    name: "Santiago",
    country: "Chile",
    state: "",
    fullName: "Santiago, Chile",
    timezone: "America/Santiago",
  },
  {
    name: "Lima",
    country: "Peru",
    state: "",
    fullName: "Lima, Peru",
    timezone: "America/Lima",
  },
  {
    name: "Bogotá",
    country: "Colombia",
    state: "",
    fullName: "Bogotá, Colombia",
    timezone: "America/Bogota",
  },
  {
    name: "Caracas",
    country: "Venezuela",
    state: "",
    fullName: "Caracas, Venezuela",
    timezone: "America/Caracas",
  },

  // Canada
  {
    name: "Toronto",
    country: "Canada",
    state: "Ontario",
    fullName: "Toronto, Ontario, Canada",
    timezone: "America/Toronto",
  },
  {
    name: "Vancouver",
    country: "Canada",
    state: "British Columbia",
    fullName: "Vancouver, British Columbia, Canada",
    timezone: "America/Vancouver",
  },
  {
    name: "Montreal",
    country: "Canada",
    state: "Quebec",
    fullName: "Montreal, Quebec, Canada",
    timezone: "America/Montreal",
  },
  {
    name: "Calgary",
    country: "Canada",
    state: "Alberta",
    fullName: "Calgary, Alberta, Canada",
    timezone: "America/Edmonton",
  },
  {
    name: "Ottawa",
    country: "Canada",
    state: "Ontario",
    fullName: "Ottawa, Ontario, Canada",
    timezone: "America/Toronto",
  },
  {
    name: "Edmonton",
    country: "Canada",
    state: "Alberta",
    fullName: "Edmonton, Alberta, Canada",
    timezone: "America/Edmonton",
  },
  {
    name: "Winnipeg",
    country: "Canada",
    state: "Manitoba",
    fullName: "Winnipeg, Manitoba, Canada",
    timezone: "America/Winnipeg",
  },
  {
    name: "Halifax",
    country: "Canada",
    state: "Nova Scotia",
    fullName: "Halifax, Nova Scotia, Canada",
    timezone: "America/Halifax",
  },

  // Multiple Portlands, Athens, etc.
  {
    name: "Portland",
    country: "United States",
    state: "Maine",
    fullName: "Portland, Maine, United States",
    timezone: "America/New_York",
  },
  {
    name: "Athens",
    country: "Greece",
    state: "",
    fullName: "Athens, Greece",
    timezone: "Europe/Athens",
  },
  {
    name: "Cambridge",
    country: "United States",
    state: "Massachusetts",
    fullName: "Cambridge, Massachusetts, United States",
    timezone: "America/New_York",
  },
  {
    name: "Cambridge",
    country: "United Kingdom",
    state: "England",
    fullName: "Cambridge, England, United Kingdom",
    timezone: "Europe/London",
  },
  {
    name: "Richmond",
    country: "United States",
    state: "Virginia",
    fullName: "Richmond, Virginia, United States",
    timezone: "America/New_York",
  },
  {
    name: "Richmond",
    country: "Canada",
    state: "British Columbia",
    fullName: "Richmond, British Columbia, Canada",
    timezone: "America/Vancouver",
  },
  {
    name: "Springfield",
    country: "United States",
    state: "Illinois",
    fullName: "Springfield, Illinois, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Springfield",
    country: "United States",
    state: "Massachusetts",
    fullName: "Springfield, Massachusetts, United States",
    timezone: "America/New_York",
  },
  {
    name: "Springfield",
    country: "United States",
    state: "Missouri",
    fullName: "Springfield, Missouri, United States",
    timezone: "America/Chicago",
  },
  {
    name: "Springfield",
    country: "United States",
    state: "Ohio",
    fullName: "Springfield, Ohio, United States",
    timezone: "America/New_York",
  },

  // Additional major cities with timezones
  {
    name: "Dubai",
    country: "UAE",
    state: "",
    fullName: "Dubai, UAE",
    timezone: "Asia/Dubai",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    state: "",
    fullName: "Istanbul, Turkey",
    timezone: "Europe/Istanbul",
  },
  {
    name: "Tel Aviv",
    country: "Israel",
    state: "",
    fullName: "Tel Aviv, Israel",
    timezone: "Asia/Jerusalem",
  },
  {
    name: "Zurich",
    country: "Switzerland",
    state: "",
    fullName: "Zurich, Switzerland",
    timezone: "Europe/Zurich",
  },
];

// Weather icons - Day and Night versions
const weatherIcons = {
  // Day icons
  sunny: `
      <svg viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="25" fill="#FFB300" opacity="0.9"/>
          <g stroke="#FFB300" stroke-width="3" stroke-linecap="round">
              <line x1="60" y1="15" x2="60" y2="25"/>
              <line x1="60" y1="95" x2="60" y2="105"/>
              <line x1="105" y1="60" x2="95" y2="60"/>
              <line x1="25" y1="60" x2="15" y2="60"/>
              <line x1="90.71" y1="29.29" x2="84.85" y2="35.15"/>
              <line x1="35.15" y1="84.85" x2="29.29" y2="90.71"/>
              <line x1="90.71" y1="90.71" x2="84.85" y2="84.85"/>
              <line x1="35.15" y1="35.15" x2="29.29" y2="29.29"/>
          </g>
      </svg>
  `,
  cloudy: `
      <svg viewBox="0 0 120 120" fill="none">
          <path d="M30 75c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 1.857 0 3.64.337 5.282.952C37.612 35.524 46.64 30 57 30c15.464 0 28 12.536 28 28 0 1.423-.106 2.821-.308 4.185C88.826 63.411 92 67.364 92 72c0 6.627-5.373 12-12 12H30z" fill="#90A4AE" opacity="0.9"/>
          <path d="M25 85c-6.627 0-12-5.373-12-12s5.373-12 12-12c1.326 0 2.598.215 3.786.608C30.934 55.506 36.686 52 43.5 52c9.665 0 17.5 7.835 17.5 17.5 0 .967-.078 1.916-.228 2.843C63.307 73.13 65.565 74 68 74c4.418 0 8-3.582 8-8s-3.582-8-8-8h-43z" fill="#B0BEC5" opacity="0.7"/>
      </svg>
  `,
  rainy: `
      <svg viewBox="0 0 120 120" fill="none">
          <path d="M30 65c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 1.857 0 3.64.337 5.282.952C37.612 25.524 46.64 20 57 20c15.464 0 28 12.536 28 28 0 1.423-.106 2.821-.308 4.185C88.826 53.411 92 57.364 92 62c0 6.627-5.373 12-12 12H30z" fill="#546E7A" opacity="0.9"/>
          <g stroke="#37474F" stroke-width="2" stroke-linecap="round">
              <line x1="45" y1="75" x2="42" y2="85"/>
              <line x1="55" y1="75" x2="52" y2="85"/>
              <line x1="65" y1="75" x2="62" y2="85"/>
              <line x1="40" y1="85" x2="37" y2="95"/>
              <line x1="50" y1="85" x2="47" y2="95"/>
              <line x1="60" y1="85" x2="57" y2="95"/>
              <line x1="70" y1="85" x2="67" y2="95"/>
          </g>
      </svg>
  `,
  
  // Night icons
  sunnyNight: `
      <svg viewBox="0 0 120 120" fill="none">
          <path d="M80 20C70 25, 65 35, 65 45C65 65, 80 80, 100 80C90 85, 80 85, 70 80C50 70, 40 50, 45 30C50 20, 65 15, 80 20Z" fill="#E1F5FE" opacity="0.9"/>
          <circle cx="85" cy="35" r="2" fill="#E1F5FE" opacity="0.7"/>
          <circle cx="95" cy="25" r="1.5" fill="#E1F5FE" opacity="0.7"/>
          <circle cx="75" cy="30" r="1" fill="#E1F5FE" opacity="0.7"/>
          <circle cx="90" cy="45" r="1" fill="#E1F5FE" opacity="0.7"/>
      </svg>
  `,
  cloudyNight: `
      <svg viewBox="0 0 120 120" fill="none">
          <path d="M30 75c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 1.857 0 3.64.337 5.282.952C37.612 35.524 46.64 30 57 30c15.464 0 28 12.536 28 28 0 1.423-.106 2.821-.308 4.185C88.826 63.411 92 67.364 92 72c0 6.627-5.373 12-12 12H30z" fill="#607D8B" opacity="0.9"/>
          <path d="M25 85c-6.627 0-12-5.373-12-12s5.373-12 12-12c1.326 0 2.598.215 3.786.608C30.934 55.506 36.686 52 43.5 52c9.665 0 17.5 7.835 17.5 17.5 0 .967-.078 1.916-.228 2.843C63.307 73.13 65.565 74 68 74c4.418 0 8-3.582 8-8s-3.582-8-8-8h-43z" fill="#78909C" opacity="0.7"/>
          <path d="M70 25C65 28, 62 32, 62 38C62 48, 70 55, 80 55C75 57, 70 57, 65 55C55 50, 50 40, 52 30C54 25, 62 22, 70 25Z" fill="#E1F5FE" opacity="0.6"/>
      </svg>
  `,
  rainyNight: `
      <svg viewBox="0 0 120 120" fill="none">
          <path d="M30 65c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 1.857 0 3.64.337 5.282.952C37.612 25.524 46.64 20 57 20c15.464 0 28 12.536 28 28 0 1.423-.106 2.821-.308 4.185C88.826 53.411 92 57.364 92 62c0 6.627-5.373 12-12 12H30z" fill="#37474F" opacity="0.9"/>
          <g stroke="#263238" stroke-width="2" stroke-linecap="round">
              <line x1="45" y1="75" x2="42" y2="85"/>
              <line x1="55" y1="75" x2="52" y2="85"/>
              <line x1="65" y1="75" x2="62" y2="85"/>
              <line x1="40" y1="85" x2="37" y2="95"/>
              <line x1="50" y1="85" x2="47" y2="95"/>
              <line x1="60" y1="85" x2="57" y2="95"/>
              <line x1="70" y1="85" x2="67" y2="95"/>
          </g>
          <path d="M75 20C70 23, 67 27, 67 33C67 43, 75 50, 85 50C80 52, 75 52, 70 50C60 45, 55 35, 57 25C59 20, 67 17, 75 20Z" fill="#E1F5FE" opacity="0.4"/>
      </svg>
  `
};

// Global variable to store current timezone
let currentTimezone = "America/New_York"; // Default to Atlanta timezone

// DOM elements
const searchInput = document.getElementById("citySearch");
const dropdown = document.getElementById("searchDropdown");
const currentLocation = document.getElementById("currentLocation");
const mainTemp = document.getElementById("mainTemp");
const weatherDesc = document.getElementById("weatherDesc");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const mainThermometer = document.getElementById("mainThermometer");
const mainWeatherIcon = document.getElementById("mainWeatherIcon");
const forecastContainer = document.getElementById("forecastContainer");

let searchTimeout;

// Function to determine if it's day or night
function isDayTime(timezone) {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    timeZone: timezone,
    hour12: false,
    hour: '2-digit'
  });
  
  const hour = parseInt(timeString);
  // Consider day time as 6 AM to 6 PM (18:00)
  return hour >= 6 && hour < 18;
}

// Search functionality
searchInput.addEventListener("input", function () {
  clearTimeout(searchTimeout);
  const query = this.value.trim();

  if (query.length < 2) {
    hideDropdown();
    return;
  }

  searchTimeout = setTimeout(() => {
    showSearchResults(query);
  }, 150);
});

searchInput.addEventListener("focus", function () {
  if (this.value.length >= 2) {
    showSearchResults(this.value);
  }
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-container")) {
    hideDropdown();
  }
});

function showSearchResults(query) {
  const filteredCities = cities
    .filter(
      (city) =>
        city.name.toLowerCase().includes(query.toLowerCase()) ||
        city.country.toLowerCase().includes(query.toLowerCase()) ||
        city.state.toLowerCase().includes(query.toLowerCase()) ||
        city.fullName.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 10);

  if (filteredCities.length === 0) {
    hideDropdown();
    return;
  }

  dropdown.innerHTML = filteredCities
    .map(
      (city) => `
      <div class="dropdown-item" data-city='${JSON.stringify(city)}'>
          <div class="city-name">${city.name}</div>
          <div class="country-info">${city.state ? `${city.state}, ` : ""}${
        city.country
      }</div>
      </div>
  `
    )
    .join("");

  dropdown.classList.add("show");

  dropdown.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function () {
      const cityData = JSON.parse(this.dataset.city);
      selectCity(cityData);
    });
  });
}

function hideDropdown() {
  dropdown.classList.remove("show");
}

function selectCity(cityData) {
  const displayName = cityData.state
    ? `${cityData.name}, ${cityData.state}`
    : `${cityData.name}, ${cityData.country}`;
  currentLocation.textContent = displayName;

  // Update timezone for this city
  currentTimezone = cityData.timezone;

  // Update time immediately for new timezone
  updateDateTime();

  searchInput.value = "";
  hideDropdown();

  updateWeatherData(cityData);
}

function updateWeatherData(cityData) {
  const weatherProfiles = {
    paris: {
      temp: 68,
      desc: "Partly Cloudy",
      humidity: 65,
      wind: 8,
      theme: "cloudy",
    },
    london: {
      temp: 62,
      desc: "Light Rain",
      humidity: 78,
      wind: 12,
      theme: "rainy",
    },
    tokyo: {
      temp: 75,
      desc: "Clear Skies",
      humidity: 60,
      wind: 6,
      theme: "sunny",
    },
    "new york": {
      temp: 72,
      desc: "Mostly Sunny",
      humidity: 55,
      wind: 10,
      theme: "sunny",
    },
    "los angeles": {
      temp: 82,
      desc: "Sunny",
      humidity: 45,
      wind: 5,
      theme: "sunny",
    },
    miami: {
      temp: 85,
      desc: "Hot and Humid",
      humidity: 80,
      wind: 8,
      theme: "sunny",
    },
    seattle: {
      temp: 65,
      desc: "Overcast",
      humidity: 70,
      wind: 9,
      theme: "rainy",
    },
    sydney: {
      temp: 78,
      desc: "Mostly Sunny",
      humidity: 58,
      wind: 15,
      theme: "sunny",
    },
    berlin: {
      temp: 60,
      desc: "Cloudy",
      humidity: 60,
      wind: 12,
      theme: "cloudy",
    },
    madrid: { temp: 80, desc: "Sunny", humidity: 40, wind: 8, theme: "sunny" },
    dubai: {
      temp: 95,
      desc: "Very Hot",
      humidity: 40,
      wind: 8,
      theme: "sunny",
    },
    moscow: { temp: 45, desc: "Cold", humidity: 65, wind: 10, theme: "cloudy" },
  };

  const cityKey = cityData.name.toLowerCase();
  const profile = weatherProfiles[cityKey] || {
    temp: Math.floor(Math.random() * 40) + 50,
    desc: ["Mostly Sunny", "Partly Cloudy", "Clear Skies", "Light Breeze"][
      Math.floor(Math.random() * 4)
    ],
    humidity: Math.floor(Math.random() * 40) + 40,
    wind: Math.floor(Math.random() * 15) + 5,
    theme: "sunny",
  };

  // Update display
  mainTemp.textContent = `${profile.temp}°F`;
  weatherDesc.textContent = profile.desc;
  humidity.textContent = `${profile.humidity}%`;
  wind.textContent = `${profile.wind} mph`;
  feelsLike.textContent = `${
    profile.temp + Math.floor(Math.random() * 6) - 3
  }°F`;

  // Update main thermometer (20°F to 100°F scale)
  const thermometerHeight = Math.max(
    5,
    Math.min(95, ((profile.temp - 20) / 80) * 100)
  );
  mainThermometer.style.height = `${thermometerHeight}%`;

  // Update theme and icon with day/night
  const isDay = isDayTime(currentTimezone);
  const timeOfDay = isDay ? 'day' : 'night';
  document.body.className = `${profile.theme} ${timeOfDay}`;
  
  // Choose the right icon for day/night
  let iconKey = profile.theme;
  if (!isDay) {
    iconKey = profile.theme + 'Night';
  }
  mainWeatherIcon.innerHTML = weatherIcons[iconKey];

  // Update forecast
  updateForecast(profile.temp, profile.theme);
}

function updateForecast(baseTemp, theme) {
  const days = ["Today", "Fri", "Sat", "Sun", "Mon"];
  const forecastIcons = ["☀️", "⛅", "🌧️", "⛈️", "☀️"];

  let forecastHTML = "";

  days.forEach((day, index) => {
    const tempVariation = Math.floor(Math.random() * 20) - 10;
    const highTemp = baseTemp + tempVariation;
    const lowTemp = highTemp - Math.floor(Math.random() * 15) - 10;

    // Calculate horizontal thermometer fill (0-100% based on temp range 20-100°F)
    const thermometerFill = Math.max(
      10,
      Math.min(90, ((highTemp - 20) / 80) * 100)
    );

    forecastHTML += `
          <div class="forecast-card">
              <div class="forecast-time">${day}</div>
              <div class="forecast-icon">${forecastIcons[index]}</div>
              <div class="forecast-temps">
                  <div class="temp-high-low">
                      <span class="temp-label">H:</span>
                      <span class="temp-value">${highTemp}°</span>
                  </div>
                  <div class="horizontal-thermometer">
                      <div class="horizontal-mercury" style="width: ${thermometerFill}%;"></div>
                  </div>
                  <div class="temp-high-low">
                      <span class="temp-label">L:</span>
                      <span class="temp-value">${lowTemp}°</span>
                  </div>
              </div>
          </div>
      `;
  });

  forecastContainer.innerHTML = forecastHTML;
}

function updateDateTime() {
  const now = new Date();

  try {
    // Use toLocaleString which properly handles timezone conversion
    const formatted = now.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: currentTimezone,
    });

    // Parse the formatted string
    const parts = formatted.split(", ");
    let datePart, timePart;

    if (parts.length >= 3) {
      datePart = parts[0] + ", " + parts[1];
      timePart = parts[2];
    } else if (parts.length === 2) {
      datePart = parts[0];
      timePart = parts[1];
    } else {
      // Fallback parsing
      const timeMatch = formatted.match(/(\d{1,2}:\d{2}\s*[AP]M)/i);
      timePart = timeMatch ? timeMatch[1] : "";
      datePart = formatted.replace(timePart, "").trim().replace(/,$/, "");
    }

    document.getElementById(
      "currentDateTime"
    ).textContent = `${datePart} — ${timePart}`;
  } catch (error) {
    console.log("Timezone error, using fallback:", error);
    // Fallback to local time if timezone is invalid
    const formatted = now.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const parts = formatted.split(", ");
    const datePart = parts[0] + ", " + parts[1];
    const timePart = parts[2];

    document.getElementById(
      "currentDateTime"
    ).textContent = `${datePart} — ${timePart}`;
  }
}

// Settings icon animation
document.querySelector(".settings-icon").addEventListener("click", function () {
  this.style.transform = "rotate(180deg)";
  setTimeout(() => {
    this.style.transform = "rotate(0deg)";
  }, 300);
});

// Keyboard navigation
searchInput.addEventListener("keydown", function (e) {
  const items = dropdown.querySelectorAll(".dropdown-item");
  const activeItem = dropdown.querySelector(".dropdown-item.active");
  let currentIndex = -1;

  if (activeItem) {
    currentIndex = Array.from(items).indexOf(activeItem);
  }

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      if (currentIndex < items.length - 1) {
        if (activeItem) activeItem.classList.remove("active");
        items[currentIndex + 1].classList.add("active");
      }
      break;

    case "ArrowUp":
      e.preventDefault();
      if (currentIndex > 0) {
        if (activeItem) activeItem.classList.remove("active");
        items[currentIndex - 1].classList.add("active");
      }
      break;

    case "Enter":
      e.preventDefault();
      if (activeItem) {
        const cityData = JSON.parse(activeItem.dataset.city);
        selectCity(cityData);
      }
      break;

    case "Escape":
      hideDropdown();
      searchInput.blur();
      break;
  }
});

// Initialize
updateDateTime();
setInterval(updateDateTime, 60000);

// Set initial theme with day/night
const initialIsDay = isDayTime(currentTimezone);
const initialTimeOfDay = initialIsDay ? 'day' : 'night';
document.body.className = `sunny ${initialTimeOfDay}`;

// Set initial icon based on time of day
const initialIconKey = initialIsDay ? 'sunny' : 'sunnyNight';
mainWeatherIcon.innerHTML = weatherIcons[initialIconKey];

// Set initial thermometer
const initialTemp = 78;
const initialHeight = Math.max(
  5,
  Math.min(95, ((initialTemp - 20) / 80) * 100)
);
mainThermometer.style.height = `${initialHeight}%`;

// Generate initial forecast
updateForecast(78, "sunny");

function searchCity(city) {
 let apiKey = "96a7o4155t404cfae6b739ecfd1b06ea";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);}