# Cycura System Guidelines

This document defines design and development principles for building Cycura — an AI-powered menstrual and PCOS health companion.

---

## General Guidelines

- Prioritize clean, modular, and scalable code
- Maintain clear separation between UI, logic, and data layers
- Avoid unnecessary complexity; keep implementations minimal and efficient
- Refactor continuously to maintain readability and maintainability
- Ensure responsiveness across all screen sizes (mobile-first approach)

---

## UX & Product Guidelines

- Design for simplicity and emotional comfort (health-sensitive domain)
- Avoid overwhelming users with excessive data or medical jargon
- Provide actionable insights instead of raw information
- Ensure all recommendations feel personalized and supportive
- Maintain a non-judgmental and inclusive tone throughout the app

---

## Health & Safety Guidelines

- Do NOT present the app as a medical authority
- Always frame outputs as “recommendations” or “insights”
- Avoid definitive diagnostic language
- Protect user data and ensure privacy-first design

---

## Design System Guidelines

- Use soft, calming color palettes (avoid harsh or aggressive colors)
- Maintain visual consistency across all screens
- Prefer cards and sections over cluttered layouts
- Use clear typography with strong readability

---

## Component Guidelines

### Buttons
- Primary: Main action (e.g., “Get Insights”)
- Secondary: Supporting actions (e.g., “Edit Data”)
- Avoid multiple primary buttons in a single view

### Forms
- Keep inputs minimal and easy to understand
- Group related fields logically
- Use progress indicators for multi-step inputs

---

## AI/ML Integration Guidelines

- Clearly separate demo logic from production ML systems
- Avoid exposing core algorithms or datasets in public code
- Ensure outputs are explainable and user-friendly
- Maintain abstraction between input data and recommendation logic

---

## Security & Privacy

- Never expose sensitive user health data
- Use secure storage and authentication practices
- Follow privacy-first architecture principles

---

## Future Scalability

- Design components to be reusable and extendable
- Ensure backend logic can scale with user growth
- Keep ML pipeline modular for future improvements