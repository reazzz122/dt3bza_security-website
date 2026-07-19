import { useState } from "react";
import { Header, Footer } from "./Layout.jsx";

const SURVEY_STEPS = [
  {
    id: "need",
    q: "What's driving this?",
    type: "single",
    options: [
      { v: "incident", label: "Something already happened", icon: "🚨" },
      { v: "new", label: "Setting up a new property", icon: "🏗️" },
      { v: "upgrade", label: "Old system needs replacing", icon: "🔄" },
      { v: "insurance", label: "Insurance requirement", icon: "📋" },
      { v: "proactive", label: "Just being proactive", icon: "🛡️" },
    ],
  },
  {
    id: "property",
    q: "Type of property?",
    type: "single",
    options: [
      { v: "home", label: "Residential home" },
      { v: "smalloffice", label: "Small business / office" },
      { v: "warehouse", label: "Warehouse / industrial" },
      { v: "school", label: "School / institution" },
      { v: "construction", label: "Construction site" },
      { v: "complex", label: "Complex / estate" },
    ],
  },
  {
    id: "placement",
    q: "Where do you need cameras?",
