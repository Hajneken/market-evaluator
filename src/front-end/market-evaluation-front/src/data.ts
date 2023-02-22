export interface Criteria {
  name: string;
  icon: string;
  description: string;
  input: string | number | undefined;
}

export const criteriaValues: Array<Criteria> = [
  {
    name: "Urgency",
    icon: "mdi-run-fast",
    description:
      "how badly do people want or need this right now? (Renting an old movie is typically low urgency; seeing a new picture on opening night is high urgency, since it only happens once.)",
    input: undefined,
  },
  {
    name: "Market Size",
    icon: "mdi-shopping-outline",
    description:
      "How many people are actively purchasing things like this? (The market for underwater basket weaving courses is very small; the market for cancer cures is massive.)",
    input: undefined,
  },
  {
    name: "Pricing Potential",
    icon: "mdi-tag-outline",
    description:
      "what is the highest average price a purchaser would be willing to spend for a solution? (Lollipops sell for $0.05; aircraft carriers sell for billions.)",
    input: undefined,
  },
  {
    name: "Cost of Customer Acquisition",
    icon: "mdi-account-arrow-up-outline",
    description:
      "how easy is it to acquire a new customer? On average, how much will it cost to generate a sale, both in money and effort? (Restaurants built on interstate highways spend little to bring in new customers. Government contractors can spend millions landing procurement deals.)",
    input: undefined,
  },
  {
    name: "Cost of Value-Delivery",
    icon: "mdi-gold",
    description:
      "how much would it cost to create and deliver the value offered, both in money and effort? (Delivering files via the Internet is almost free; inventing a product and building a factory costs millions.)",
    input: undefined,
  },
  {
    name: "Uniqueness of Offer",
    icon: "mdi-unicorn",
    description:
      "how unique is your offer versus competing offerings in the market, and how easy is it for potential competitors to copy you? (There are many hair salons, but very few companies that offer private space travel.)",
    input: undefined,
  },
  {
    name: "Speed to Market",
    icon: "mdi-speedometer",
    description:
      "how quickly can you create something to sell? (You can offer to mow a neighbor’s lawn in minutes; opening a bank can take years.)",
    input: undefined,
  },
  {
    name: "Up-Front Investment",
    icon: "mdi-cash-clock",
    description:
      "how much will you have to invest before you’re ready to sell? (To be a housekeeper, all you need is a set of inexpensive cleaning products. To mine for gold, you need millions to purchase land and excavating equipment.)",
    input: undefined,
  },
  {
    name: "Up-Sell Potential",
    icon: "mdi-offer",
    description:
      "are there related secondary offers that you could also present to purchasing customers? (Customers who purchase razors need shaving cream and extra blades as well; buy a Frisbee, and you won’t need another unless you lose it.)",
    input: undefined,
  },
  {
    name: "Evergreen Potential",
    icon: "mdi-beach",
    description:
      "once the initial offer has been created, how much additional work will you have to put into it in order to continue selling? (Business consulting requires ongoing work to get paid; a book can be produced once, then sold over and over as-is.)",
    input: undefined,
  },
];
