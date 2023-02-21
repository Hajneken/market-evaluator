# Product Evaluator 
The score is calculated based on the following criteria:

1. *Urgency* — how badly do people want or need this right now? (Renting an old movie is typically low urgency; seeing a new picture on opening night is high urgency, since it only happens once.)
2. *Market Size* — How many people are actively purchasing things like this? (The market for underwater basket weaving courses is very small; the market for cancer cures is massive.)
3. *Pricing Potential* — what is the highest average price a purchaser would be willing to spend for a solution? (Lollipops sell for $0.05; aircraft carriers sell for billions.)
4. *Cost of Customer Acquisition* — how easy is it to acquire a new customer? On average, how much will it cost to generate a sale, both in money and effort? (Restaurants built on interstate highways spend little to bring in new customers. Government contractors can spend millions landing procurement deals.)
5. *Cost of Value-Delivery* — how much would it cost to create and deliver the value offered, both in money and effort? (Delivering files via the Internet is almost free; inventing a product and building a factory costs millions.)
6. *Uniqueness of Offer* — how unique is your offer versus competing offerings in the market, and how easy is it for potential competitors to copy you? (There are many hair salons, but very few companies that offer private space travel.)
7. *Speed to Market* — how quickly can you create something to sell? (You can offer to mow a neighbor’s lawn in minutes; opening a bank can take years.)
8. *Up-Front Investment* — how much will you have to invest before you’re ready to sell? (To be a housekeeper, all you need is a set of inexpensive cleaning products. To mine for gold, you need millions to purchase land and excavating equipment.)
9. *Up-Sell Potential* — are there related secondary offers that you could also present to purchasing customers? (Customers who purchase razors need shaving cream and extra blades as well; buy a Frisbee, and you won’t need another unless you lose it.)
10. *Evergreen Potential* — once the initial offer has been created, how much additional work will you have to put into it in order to continue selling? (Business consulting requires ongoing work to get paid; a book can be produced once, then sold over and over as-is.)
---
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
