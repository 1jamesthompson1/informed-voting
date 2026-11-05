// Generated from scripts/build_data.py on 2026-11-05.
// The script is an authoring tool; the published site only needs this file.
// You can also edit this file directly. If you do, update META.version and
// note the change in the changelog on methods.html.
//
// Every non-null position has a source URL. Null/absent means the party had
// no clear published position in the material reviewed.

export const PARTIES = [
  {
    "id": "national",
    "name": "National",
    "fullName": "New Zealand National Party",
    "leader": "Christopher Luxon",
    "colour": "#005a9c",
    "textColour": "#ffffff",
    "blurb": "The centre-right party leading the 2023–2026 coalition government."
  },
  {
    "id": "labour",
    "name": "Labour",
    "fullName": "New Zealand Labour Party",
    "leader": "Chris Hipkins",
    "colour": "#d82a20",
    "textColour": "#ffffff",
    "blurb": "The main centre-left opposition party."
  },
  {
    "id": "green",
    "name": "Greens",
    "fullName": "Green Party of Aotearoa New Zealand",
    "leader": "Marama Davidson & Chlöe Swarbrick",
    "colour": "#098137",
    "textColour": "#ffffff",
    "blurb": "The environmental and social justice party."
  },
  {
    "id": "act",
    "name": "ACT",
    "fullName": "ACT New Zealand",
    "leader": "David Seymour",
    "colour": "#f4c300",
    "textColour": "#1c1d19",
    "blurb": "The classical-liberal party and coalition partner."
  },
  {
    "id": "nzfirst",
    "name": "NZ First",
    "fullName": "New Zealand First",
    "leader": "Winston Peters",
    "colour": "#111111",
    "textColour": "#ffffff",
    "blurb": "The nationalist and socially conservative coalition partner."
  },
  {
    "id": "tpm",
    "name": "Te Pāti Māori",
    "fullName": "Te Pāti Māori",
    "leader": "Rawiri Waititi & Debbie Ngarewa-Packer",
    "colour": "#b01e2e",
    "textColour": "#ffffff",
    "blurb": "The Māori sovereignty and tino rangatiratanga party."
  },
  {
    "id": "top",
    "name": "TOP",
    "fullName": "The Opportunity Party",
    "leader": "Qiulae Wong",
    "colour": "#0f8b8d",
    "textColour": "#ffffff",
    "blurb": "The centrist, evidence-focused party polling near the balance of power."
  }
];

export const SECTIONS = [
  {
    "id": "economy",
    "number": 1,
    "title": "Money, tax and the cost of living",
    "shortTitle": "Money & tax",
    "intro": "Prices rose sharply after 2021 and many households are still adjusting. The parties disagree about who should pay more tax, who should get relief, and what public services should be protected.",
    "hotTopic": "The big fight is over tax. National and ACT promise no new taxes and argue that lower government spending is the way to fund frontline services. Labour wants a 28% capital gains tax on investment property to pay for health and other priorities. The Greens and Te Pāti Māori want wealth taxes. TOP wants a land value tax paired with income tax cuts. The minimum wage is also in play: ACT would freeze it for three years, while Labour, the Greens, Te Pāti Māori and NZ First would keep raising it.",
    "debate": "There is no free lunch in tax policy. Lower taxes can leave less money for health, education and infrastructure; higher taxes can fall on investment, land or income. The question is not just “more or less tax” but who pays, what is taxed, and what the money buys.",
    "sources": [
      {
        "label": "Stats NZ: Consumers price index",
        "url": "https://www.stats.govt.nz/indicators/consumers-price-index-cpi"
      },
      {
        "label": "Treasury: Budget 2026",
        "url": "https://www.treasury.govt.nz/publications/budget/budget-2026"
      }
    ],
    "statements": [
      {
        "id": "e1",
        "text": "The Government should not introduce any new taxes.",
        "plain": "No new types of tax, such as a capital gains tax, wealth tax or land value tax. It does not necessarily mean cutting the taxes that already exist.",
        "context": "Supporters say households and businesses need certainty and that the government should live within its means. Critics say new revenue is needed to fund health, infrastructure and an ageing population.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National's 2026 policy is an explicit promise of no new taxes in the next term.",
            "basis": "Introduce no new taxes in the next term of government",
            "source": {
              "label": "'No New Taxes under National', 23 August 2026 (accessed 24 August 2026)",
              "url": "https://web.archive.org/web/20260823214037/https://www.national.org.nz/news/260823-no-new-taxes-under-national",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT campaigns on lower taxes and a smaller state, and opposes new taxes such as a capital gains or wealth tax.",
            "basis": null,
            "source": {
              "label": "ACT: Economy & Cost of Living policy",
              "url": "https://www.act.org.nz/policies/economy",
              "type": "official"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour's flagship new revenue policy is a 28% capital gains tax on investment property.",
            "basis": "Create a 28% capital gains tax on commercial and residential properties, excluding family homes",
            "source": {
              "label": "'Capital Gains Tax', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813015413/https://www.labour.org.nz/capitalgainstax",
              "type": "official"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens would introduce a 2.5% annual wealth tax on net assets above $10 million.",
            "basis": "Introduce a tax for net wealth over $10m",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori proposes a targeted wealth tax and a 5% stamp duty on residential sales.",
            "basis": "Implement a targeted wealth tax starting from 1.5 percent",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -1,
            "evidence": "NZ First opposes comprehensive capital gains, wealth and inheritance taxes, but has not signed up to a no-new-taxes pledge.",
            "basis": null,
            "source": {
              "label": "Grant Thornton: Tax policy at the crossroads — election 2026",
              "url": "https://www.grantthornton.co.nz/insights/tax-policy-at-the-crossroads-growth-simplicity-and-redistribution-in-election-2026/",
              "type": "secondary"
            }
          },
          "top": {
            "stance": -2,
            "evidence": "TOP proposes a new 1.75% land value tax, although it pairs this with income tax cuts.",
            "basis": "Introduce a land value tax of 1.75 percent",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "e2",
        "text": "The Government should introduce a capital gains tax on investment property, but not the family home.",
        "plain": "A tax on the profit made when an investment property is sold. The home you live in would be exempt.",
        "context": "Supporters say it would reduce the tax advantage of property investment and help shift money into productive businesses. Critics say it would add cost and complexity and could affect rents or investment.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would apply a 28% tax to gains on commercial and residential property, excluding the family home, from July 2027.",
            "basis": "Create a 28% capital gains tax on commercial and residential properties, excluding family homes",
            "source": {
              "label": "'Capital Gains Tax', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813015413/https://www.labour.org.nz/capitalgainstax",
              "type": "official"
            }
          },
          "green": {
            "stance": 1,
            "evidence": "The Greens support taxing wealth and capital more broadly; they describe Labour's CGT as watered down.",
            "basis": "Introduce a tax for net wealth over $10m",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National opposes a capital gains tax and promises no new taxes.",
            "basis": "Introduce no new taxes in the next term of government",
            "source": {
              "label": "'No New Taxes under National', 23 August 2026 (accessed 24 August 2026)",
              "url": "https://web.archive.org/web/20260823214037/https://www.national.org.nz/news/260823-no-new-taxes-under-national",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT opposes a capital gains tax and wants to abolish Labour's rental tax.",
            "basis": null,
            "source": {
              "label": "ACT: Economy & Cost of Living policy",
              "url": "https://www.act.org.nz/policies/economy",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First opposes comprehensive capital gains taxes.",
            "basis": null,
            "source": {
              "label": "Grant Thornton: Tax policy at the crossroads — election 2026",
              "url": "https://www.grantthornton.co.nz/insights/tax-policy-at-the-crossroads-growth-simplicity-and-redistribution-in-election-2026/",
              "type": "secondary"
            }
          },
          "tpm": {
            "stance": 0,
            "evidence": "Te Pāti Māori prefers a wealth tax, a stamp duty and a land-banking tax rather than a CGT.",
            "basis": "Implement a targeted wealth tax starting from 1.5 percent",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP prefers an annual land value tax to a capital gains tax.",
            "basis": "Introduce a land value tax of 1.75 percent",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        },
        "glossary": [
          "capital-gains-tax"
        ]
      },
      {
        "id": "e3",
        "text": "The Government should introduce a wealth tax on the very richest New Zealanders.",
        "plain": "A small annual tax on the total wealth of the richest people, for example net assets above $10 million.",
        "context": "Supporters say it would reduce inequality and fund public services without taxing wages. Critics say wealth is hard to measure, could move offshore, and may not raise as much as promised.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens propose a 2.5% annual tax on net assets above $10 million, excluding the family home.",
            "basis": "Introduce a tax for net wealth over $10m",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori proposes a targeted wealth tax starting at 1.5%, with the revenue going to housing, health and whānau support.",
            "basis": "Implement a targeted wealth tax starting from 1.5 percent",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour chose a capital gains tax and has ruled out a wealth tax.",
            "basis": "Create a 28% capital gains tax on commercial and residential properties, excluding family homes",
            "source": {
              "label": "'Capital Gains Tax', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813015413/https://www.labour.org.nz/capitalgainstax",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National rules out a wealth tax as part of its no-new-taxes commitment.",
            "basis": "Introduce no new taxes in the next term of government",
            "source": {
              "label": "'No New Taxes under National', 23 August 2026 (accessed 24 August 2026)",
              "url": "https://web.archive.org/web/20260823214037/https://www.national.org.nz/news/260823-no-new-taxes-under-national",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT opposes wealth taxes and campaigns on lower taxes and property rights.",
            "basis": null,
            "source": {
              "label": "ACT: Economy & Cost of Living policy",
              "url": "https://www.act.org.nz/policies/economy",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First opposes wealth and inheritance taxes.",
            "basis": null,
            "source": {
              "label": "Grant Thornton: Tax policy at the crossroads — election 2026",
              "url": "https://www.grantthornton.co.nz/insights/tax-policy-at-the-crossroads-growth-simplicity-and-redistribution-in-election-2026/",
              "type": "secondary"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP proposes a land value tax rather than a wealth tax.",
            "basis": "Introduce a land value tax of 1.75 percent",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        },
        "glossary": [
          "wealth-tax"
        ]
      },
      {
        "id": "e4",
        "text": "The Government should raise the minimum wage every year, at least in line with inflation.",
        "plain": "The lowest legal hourly pay would rise each year, so that it does not fall behind the cost of living.",
        "context": "Supporters say low-paid workers should not fall behind and that higher wages support spending. Critics say big increases can push up costs and reduce jobs, especially for small businesses and young workers.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour commits to increasing the minimum wage every year.",
            "basis": "Increase the minimum wage every year",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First would raise the minimum wage in line with inflation and increase Working for Families.",
            "basis": "Increase In-Work-Family-Tax-Credit by $70 a week",
            "source": {
              "label": "'NZ First to Increase Working for Families, Minimum Wage', 10 October 2026 (accessed 12 October 2026)",
              "url": "https://web.archive.org/web/20261011233947/https://www.nzfirst.nz/nz_first_to_increase_working_for_families_minimum_wage",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens want to abolish the training wage and move towards a living wage.",
            "basis": "Abolish the training wage ",
            "source": {
              "label": "'Green Party to abolish training wage and provide more support for apprentices ', undated (accessed 21 October 2026)",
              "url": "https://web.archive.org/web/20261020210152/https://www.greens.org.nz/green_party_to_abolish_training_wage_and_provide_more_support_for_apprentices",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori wants the minimum wage raised to $25 an hour immediately and opposes starting-out wages.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Economy — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/economy",
              "type": "secondary"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would freeze the minimum wage for three years and introduce a training wage.",
            "basis": "Freeze the minimum wage for three years",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National has no 2026 commitment to an annual minimum wage formula; it focuses on tax relief and economic growth.",
            "basis": null,
            "source": {
              "label": "National: Our Plan (2026)",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP opposes paying disabled workers less than the minimum wage, but does not campaign on an annual inflation formula.",
            "basis": "Oppose disabled people being paid less than minimum wage",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "The cost of living is the top concern. The debate is whether to cut taxes, introduce new taxes on wealth or property, or regulate prices. The minimum wage is another flashpoint: some want it frozen to protect jobs, others want it raised to keep up with inflation."
  },
  {
    "id": "housing",
    "number": 2,
    "title": "Housing",
    "shortTitle": "Housing",
    "intro": "House prices and rents are high relative to incomes, and the social housing waitlist remains long. Parties differ on how much the state should build, how easy it should be to intensify cities, and how much protection renters should get.",
    "hotTopic": "The housing debate has moved from first-home grants to supply. National and ACT want to make it easier to build and to reduce the tax burden on landlords. Labour wants more social housing and stronger renter protections. The Greens want a 2% rent cap and more public housing. Te Pāti Māori wants a stamp duty and a land-banking tax. TOP wants zoning reform and a land value tax. The question is whether the next government can actually increase supply without pushing up costs or displacing renters.",
    "debate": "Housing policy is a set of trade-offs: more density can upset neighbours but increase supply; rent caps can protect sitting tenants but reduce the incentive to build; state housing costs money but can house people the market does not. There is no single lever that fixes affordability.",
    "sources": [
      {
        "label": "Stats NZ: Housing and rental price indicators",
        "url": "https://www.stats.govt.nz/indicators/housing-and-rental-price-indicators"
      },
      {
        "label": "Ministry of Housing and Urban Development",
        "url": "https://www.hud.govt.nz/"
      }
    ],
    "statements": [
      {
        "id": "h1",
        "text": "The Government should build thousands more state houses, even if it means borrowing more.",
        "plain": "The state would fund and own more public housing, rather than relying mainly on private developers and the market.",
        "context": "Supporters say public housing is the only way to house people on low incomes and reduce the waitlist. Critics say it is expensive, slow, and that the private sector can build more cheaply.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would add at least 6,000 social housing places over four years.",
            "basis": "Add at least 6000 more social housing places over the next 4 years",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would increase public housing supply and housing support.",
            "basis": "Increase public housing supply and housing support ",
            "source": {
              "label": "'Housing', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813025517/https://www.greens.org.nz/manifesto_2026_housing",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports more public and private housing supply, with a focus on Māori housing.",
            "basis": "Increase the supply of housing in both the public and private sector",
            "source": {
              "label": "'Housing', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818013324/https://www.maoriparty.org.nz/housing",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National funds social housing through the Housing Flexible Fund, but does not campaign on thousands more state houses.",
            "basis": "Reserve at least 20 percent of Housing Flexible Fund places for older people ",
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": 0,
            "evidence": "ACT focuses on freeing up private building and property rights rather than expanding state housing.",
            "basis": null,
            "source": {
              "label": "ACT: Housing & Infrastructure policy",
              "url": "https://www.act.org.nz/policies/infrastructure",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 0,
            "evidence": "NZ First would reserve social housing for citizens first; it has no clear commitment to building thousands more state houses.",
            "basis": "Reserve social housing for NZ citizens first",
            "source": {
              "label": "'NZ First Announces Immigration Reform Policies', 11 September 2026 (accessed 11 September 2026)",
              "url": "https://web.archive.org/web/20260911013910/https://www.nzfirst.nz/nz_first_announces_immigration_reform_policies",
              "type": "official"
            }
          },
          "top": {
            "stance": 1,
            "evidence": "TOP proposes targeted construction support and a social housing fund.",
            "basis": "Make housing more affordable with targeted construction support",
            "source": {
              "label": "'Affordable Housing', undated (accessed 19 August 2026)",
              "url": "https://web.archive.org/web/20260819042530/https://www.opportunity.org.nz/affordable_housing",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "h2",
        "text": "The Government should allow denser housing in cities, even when neighbours object.",
        "plain": "More townhouses and apartments would be allowed in existing neighbourhoods, rather than keeping them low-rise.",
        "context": "Supporters say density is essential to increase supply, shorten commutes and make housing cheaper. Critics say it can change neighbourhood character, strain infrastructure and reduce local say.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National has removed minimum parking requirements and backs more density and faster consents.",
            "basis": "Remove the ban on minimum car parking requirements for new housing",
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT says people should be free to build on their property unless they cause material harm.",
            "basis": null,
            "source": {
              "label": "ACT: Housing & Infrastructure policy",
              "url": "https://www.act.org.nz/policies/infrastructure",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would revamp zoning to allow more housing and reduce prices.",
            "basis": "Revamp zoning to reduce house prices",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "green": {
            "stance": 1,
            "evidence": "The Greens support mixed-use, walkable neighbourhoods and more housing supply.",
            "basis": "Encourage mixed-use areas and walkability in new housing developments",
            "source": {
              "label": "'Housing', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813025517/https://www.greens.org.nz/manifesto_2026_housing",
              "type": "official"
            }
          },
          "labour": {
            "stance": 0,
            "evidence": "Labour introduced the Medium Density Residential Standards, but its 2026 housing policy focuses on social housing and renters; it has no clear density commitment.",
            "basis": null,
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 0,
            "evidence": "NZ First wants infrastructure capacity before fast-track housing; it has no clear density commitment.",
            "basis": "Add infrastructure and service capacity requirements to residential fast-track permissions",
            "source": {
              "label": "'NZFirst Policy Announcement: Changes to Fast-Track Residential Approvals', 14 October 2026 (accessed 14 October 2026)",
              "url": "https://web.archive.org/web/20261015002406/https://www.nzfirst.nz/nzfirst_policy_announcement_changes_to_fast_track_residential_approvals",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 0,
            "evidence": "Te Pāti Māori supports more supply but emphasises whenua and Māori housing; it has no clear density position.",
            "basis": "Increase the supply of housing in both the public and private sector",
            "source": {
              "label": "'Housing', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818013324/https://www.maoriparty.org.nz/housing",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "h3",
        "text": "The Government should cap rent increases, for example at 2% a year.",
        "plain": "Landlords would be limited in how much they can raise rent each year.",
        "context": "Supporters say caps protect renters from sudden increases and reduce homelessness. Critics say caps discourage landlords from maintaining or building rentals and can make shortages worse.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would limit annual rent increases to 2%.",
            "basis": "Limit annual rent increases to 2 percent",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "labour": {
            "stance": 0,
            "evidence": "Labour would ban no-cause evictions and strengthen tenancy rights, but has not promised a rent cap.",
            "basis": "Ban no-cause evictions and increase the number of days' notice landlords must give in certain situations",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National focuses on supply and first-home support; it has no rent cap policy.",
            "basis": null,
            "source": {
              "label": "National: Our Plan (2026)",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT favours property rights and supply, not rent controls.",
            "basis": null,
            "source": {
              "label": "ACT: Housing & Infrastructure policy",
              "url": "https://www.act.org.nz/policies/infrastructure",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 0,
            "evidence": "Te Pāti Māori focuses on supply and Māori housing; it has no rent cap policy.",
            "basis": "Increase the supply of housing in both the public and private sector",
            "source": {
              "label": "'Housing', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818013324/https://www.maoriparty.org.nz/housing",
              "type": "official"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP focuses on zoning, construction and a land value tax, not rent caps.",
            "basis": "Make housing more affordable with targeted construction support",
            "source": {
              "label": "'Affordable Housing', undated (accessed 19 August 2026)",
              "url": "https://web.archive.org/web/20260819042530/https://www.opportunity.org.nz/affordable_housing",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "h4",
        "text": "The Government should help first-home buyers with low-deposit loans and grants.",
        "plain": "The state would make it easier for people to buy their first home with a smaller deposit or direct financial help.",
        "context": "Supporters say it helps people who can afford mortgage payments but not a large deposit. Critics say it can push prices up and mainly helps people who already have stable incomes.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National would raise the income threshold for its 5% first-home deposit scheme.",
            "basis": "Raise the income threshold for people who can pay a lower deposit for their first home",
            "source": {
              "label": "'National is backing first-home buyers', 6 September 2026 (accessed 08 September 2026)",
              "url": "https://web.archive.org/web/20260908044101/https://www.national.org.nz/news/260906-backs-first-home-buyers",
              "type": "official"
            }
          },
          "labour": {
            "stance": 2,
            "evidence": "Labour would raise the income cap for First Home Loans and add a rent-to-own pathway.",
            "basis": "Raise the income cap for the First Home Loans scheme",
            "source": {
              "label": "'Labour to help more Kiwis buy their first home', 27 October 2026 (accessed 27 October 2026)",
              "url": "https://web.archive.org/web/20261027050904/https://www.labour.org.nz/news/release-labour-to-help-more-kiwis-buy-their-first-home/",
              "type": "official"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT prefers supply-side reform to first-home grants and subsidies.",
            "basis": null,
            "source": {
              "label": "ACT: Housing & Infrastructure policy",
              "url": "https://www.act.org.nz/policies/infrastructure",
              "type": "official"
            }
          },
          "green": {
            "stance": 0,
            "evidence": "The Greens focus on public housing and renters rather than first-home grants.",
            "basis": "Reverse interest deductibility for residential property investment",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 0,
            "evidence": "Te Pāti Māori's housing focus is supply and Māori housing, not first-home grants.",
            "basis": "Increase the supply of housing in both the public and private sector",
            "source": {
              "label": "'Housing', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818013324/https://www.maoriparty.org.nz/housing",
              "type": "official"
            }
          },
          "top": {
            "stance": 1,
            "evidence": "TOP supports targeted construction support to make housing more affordable.",
            "basis": "Make housing more affordable with targeted construction support",
            "source": {
              "label": "'Affordable Housing', undated (accessed 19 August 2026)",
              "url": "https://web.archive.org/web/20260819042530/https://www.opportunity.org.nz/affordable_housing",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "House prices and rents are high, and the social housing waitlist is long. The debate is whether to build more state houses, allow denser housing, cap rents, or rely on the private market. First-home support is popular, but critics say it can push prices up."
  },
  {
    "id": "health",
    "number": 3,
    "title": "Health",
    "shortTitle": "Health",
    "intro": "Emergency departments and GP clinics are under pressure, and many people wait too long for planned care. Parties differ on free GP visits, private involvement, and how to pay for more staff and medicines.",
    "hotTopic": "Labour's Medicard would give everyone three free GP visits a year, funded by its capital gains tax. The Greens want free public health services, including unlimited GP care. National says it would fund more medicines by cutting foreign aid outside the Pacific, and it uses private hospitals to cut elective waits. ACT wants a bigger role for private and community providers and a larger share of the health budget spent on medicines. Te Pāti Māori wants Māori-led services and restoration of the Māori Health Authority. TOP wants a 10-year health plan and health funding lifted to 9% of GDP.",
    "debate": "More free care and more staff both cost money. The choices are whether to raise taxes, borrow, cut other spending, or shift more care to private providers. Each option has winners and losers, and the health workforce is a binding constraint either way.",
    "sources": [
      {
        "label": "Te Whatu Ora: Health NZ performance data",
        "url": "https://www.tewhatuora.govt.nz/"
      },
      {
        "label": "Ministry of Health",
        "url": "https://www.health.govt.nz/"
      }
    ],
    "statements": [
      {
        "id": "he1",
        "text": "The Government should make GP visits free for everyone.",
        "plain": "The state would pay for every visit to a general practice, so patients would not pay a fee at the counter.",
        "context": "Supporters say cost stops people getting care early and pushes them to emergency departments. Critics say universal free GP care is expensive and may not be the best use of limited health dollars.",
        "positions": {
          "labour": {
            "stance": 1,
            "evidence": "Labour offers three free GP visits a year, not unlimited free care.",
            "basis": "Make up to three GP visits a year free ",
            "source": {
              "label": "'Free Doctor's Visits with the Medicard', undated (accessed 11 August 2026)",
              "url": "https://web.archive.org/web/20260810223019/https://www.labour.org.nz/medicard",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens want free public health services, including GP care.",
            "basis": "Increase free public health services ",
            "source": {
              "label": "'Health', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813025428/https://www.greens.org.nz/manifesto_2026_health",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports free primary care for low-income whānau.",
            "basis": "Invest in Māori-health outcomes",
            "source": {
              "label": "'Health ', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042407/https://www.maoriparty.org.nz/health",
              "type": "official"
            }
          },
          "top": {
            "stance": 1,
            "evidence": "TOP offers free primary care for under-30s, not everyone.",
            "basis": "Introduce a 10-year plan to strengthen the health system",
            "source": {
              "label": "'10-year plans to strengthen health and education', 2 September 2026 (accessed 02 September 2026)",
              "url": "https://web.archive.org/web/20260901211428/https://www.opportunity.org.nz/10_year_plans_to_strengthen_health_and_education",
              "type": "official"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "National criticises universal free GP visits as unaffordable and funds primary care capacity instead.",
            "basis": null,
            "source": {
              "label": "Te Ao Māori News: Labour announces targeted tax to fund free GP visits (28 Oct 2025)",
              "url": "https://www.teaonews.co.nz/2025/10/28/labour-announces-targeted-tax-to-fund-free-gp-visits/",
              "type": "secondary"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT wants a purchaser/provider model and opposes universal free GP care.",
            "basis": null,
            "source": {
              "label": "ACT: Health policy",
              "url": "https://www.act.org.nz/policies/health",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "he2",
        "text": "The Government should increase funding for Pharmac so more medicines are publicly funded.",
        "plain": "Pharmac would get more money to subsidise medicines, so patients pay less or get access to treatments that are not currently funded.",
        "context": "Supporters say New Zealand lags comparable countries on access to new medicines. Critics say the health budget is finite and more spending on medicines means less for hospitals, staff or prevention.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National would add $604 million to Pharmac's medicines budget, funded by cutting foreign aid outside the Pacific.",
            "basis": "Increase funding for Pharmac's medicines budget by reducing foreign aid",
            "source": {
              "label": "'Building the Future: More medicines and earlier care' (PDF), 6 October 2026 (accessed 06 October 2026)",
              "url": "https://web.archive.org/web/20261006031134/https://assets.national.org.nz/web/prod/More%20medicines%20and%20earlier%20care.pdf?v=1791237531",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT would lift Pharmac's share of the health budget to over 10% by 2033.",
            "basis": "Increase the percentage of the health budget spent on Pharmac to over 10 percent by 2033",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "labour": {
            "stance": 2,
            "evidence": "Labour would require Pharmac to proactively seek medicines and fund it apolitically.",
            "basis": "Ensure Pharmac seeks out medicines proactively and is funded apolitically",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would increase funding for Pharmac.",
            "basis": "Increase funding for Pharmac ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports more health funding, including medicines, with a focus on Māori outcomes.",
            "basis": "Invest in Māori-health outcomes",
            "source": {
              "label": "'Health ', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042407/https://www.maoriparty.org.nz/health",
              "type": "official"
            }
          },
          "top": {
            "stance": 1,
            "evidence": "TOP's 10-year health plan includes more funding for primary care and medicines.",
            "basis": "Lift health funding to 9 percent of GDP",
            "source": {
              "label": "'10-year plans to strengthen health and education', 2 September 2026 (accessed 02 September 2026)",
              "url": "https://web.archive.org/web/20260901211428/https://www.opportunity.org.nz/10_year_plans_to_strengthen_health_and_education",
              "type": "official"
            }
          }
        },
        "glossary": [
          "pharmac"
        ]
      },
      {
        "id": "he3",
        "text": "The Government should allow private companies to provide more public health services.",
        "plain": "Private hospitals and clinics would take on more operations and care that the public system pays for.",
        "context": "Supporters say private capacity can cut waits and use spare capacity. Critics say it can pull staff and simple cases out of the public system, leaving the public system with the sickest and most complex patients.",
        "positions": {
          "act": {
            "stance": 2,
            "evidence": "ACT would build two independent cancer centres through a public-private partnership.",
            "basis": "Establish a public-private partnership to build two independent cancer centres.",
            "source": {
              "label": "'ACT unveils plan for New Zealand’s first dedicated Cancer centre - Beyond Tomorrow', 21 August 2026 (accessed 24 August 2026)",
              "url": "https://web.archive.org/web/20260823213635/https://www.act.org.nz/news/act-unveils-plan-for-new-zealands-first-dedicated-cancer-centre---beyond-tomorrow",
              "type": "official"
            }
          },
          "national": {
            "stance": 1,
            "evidence": "National uses private hospitals to cut elective waits through its Elective Boost programme.",
            "basis": null,
            "source": {
              "label": "National: Our Plan (2026)",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour opposes expanding private provision, arguing it drains the public workforce.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Health — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/health",
              "type": "secondary"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens want a publicly funded health system, not more private provision.",
            "basis": null,
            "source": {
              "label": "Green Party: Health — accessible care for everyone",
              "url": "https://www.greens.org.nz/manifesto_2026_health",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -1,
            "evidence": "Te Pāti Māori wants Māori-led public services and restoration of the Māori Health Authority.",
            "basis": "Invest in Māori-health outcomes",
            "source": {
              "label": "'Health ', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042407/https://www.maoriparty.org.nz/health",
              "type": "official"
            }
          },
          "top": {
            "stance": -1,
            "evidence": "TOP's health policies are publicly funded; it does not propose a private provider expansion.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Health — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/health",
              "type": "secondary"
            }
          }
        }
      },
      {
        "id": "he4",
        "text": "The Government should fund more doctors and nurses, even if it means borrowing more.",
        "plain": "The health workforce would grow, and the government would borrow to pay for the extra staff and training.",
        "context": "Supporters say workforce shortages are the main barrier to care and that borrowing for health is worth it. Critics say the health system needs to use its existing staff better and that more borrowing simply shifts the cost to future taxpayers.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would guarantee jobs for New Zealand-trained graduate nurses and fund more GP training.",
            "basis": "Guarantee jobs for NZ-trained graduate nurses",
            "source": {
              "label": "'Labour will guarantee a job for graduate nurses', 31 August 2026 (accessed 01 September 2026)",
              "url": "https://web.archive.org/web/20260901022610/https://www.labour.org.nz/news/release-labour-will-guarantee-a-job-for-graduate-nurses/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would improve wages and staffing across health providers.",
            "basis": "Improve wages and staffing for health providers ",
            "source": {
              "label": "'Health', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813025428/https://www.greens.org.nz/manifesto_2026_health",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori would invest in the Māori health workforce and Māori-led services.",
            "basis": "Invest in Māori-health outcomes",
            "source": {
              "label": "'Health ', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042407/https://www.maoriparty.org.nz/health",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would lift health funding to 9% of GDP over a 10-year plan.",
            "basis": "Lift health funding to 9 percent of GDP",
            "source": {
              "label": "'10-year plans to strengthen health and education', 2 September 2026 (accessed 02 September 2026)",
              "url": "https://web.archive.org/web/20260901211428/https://www.opportunity.org.nz/10_year_plans_to_strengthen_health_and_education",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National says it has increased health funding and uses public and private capacity; it does not commit to borrowing more for staffing.",
            "basis": null,
            "source": {
              "label": "National: Our Plan (2026)",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "act": {
            "stance": 1,
            "evidence": "ACT would boost GP pay and training, but within a smaller-state approach.",
            "basis": "Increase pay for general practice doctors",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 1,
            "evidence": "NZ First focuses on primary care and GP autonomy rather than a large workforce borrowing plan.",
            "basis": null,
            "source": {
              "label": "NZ First: Health policy",
              "url": "https://www.nzfirst.nz/policy",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "Emergency departments and GP clinics are under pressure, and wait times for planned care are long. The debate is whether to make GP visits free, fund more medicines, use private hospitals, or focus on the public workforce. Workforce shortages are a binding constraint."
  },
  {
    "id": "education",
    "number": 4,
    "title": "Education",
    "shortTitle": "Education",
    "intro": "Literacy and numeracy, school lunches, charter schools and student debt are all in play. Parties differ on how much choice, funding and Treaty content should be in schools.",
    "hotTopic": "National has focused on structured literacy, a new NCEA and limits on screens in early schooling. Labour wants locally made school lunches, more teacher aides and an end to charter schools. ACT wants to expand charter schools to 10,000 students. The Greens want fees-free tertiary education and universal student allowances. Te Pāti Māori wants a Māori Education Authority and Māori history in the curriculum. TOP wants a 10-year education plan and Te Tiriti and Aotearoa history taught in schools.",
    "debate": "Education policy is about what schools should teach, who should run them, and who should pay. Evidence on charter schools, school lunches and class size is contested, and the effects often depend on how well a policy is implemented.",
    "sources": [
      {
        "label": "Ministry of Education",
        "url": "https://www.education.govt.nz/"
      },
      {
        "label": "Education Review Office",
        "url": "https://ero.govt.nz/"
      }
    ],
    "statements": [
      {
        "id": "ed1",
        "text": "The Government should bring back charter schools.",
        "plain": "Schools would be run by independent sponsors with public funding, outside the normal state school rules.",
        "context": "Supporters say charter schools give parents and communities more choice and can turn around failing schools. Critics say they divert money from the state system and lack accountability.",
        "positions": {
          "national": {
            "stance": 1,
            "evidence": "National restored charter schools as part of the coalition; it is not a signature 2026 campaign item.",
            "basis": null,
            "source": {
              "label": "Newsroom: What abolishing charter schools would look like under Labour (19 Oct 2026)",
              "url": "https://newsroom.co.nz/2026/10/19/what-abolishing-charter-schools-would-look-like-under-labour/",
              "type": "secondary"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT wants 10,000 children in charter schools by 2029 and a charter option in every major town.",
            "basis": "Create a target of 10,000 children attending charter schools by 2029",
            "source": {
              "label": "'Expanding Charter Schools', undated (accessed 23 October 2026)",
              "url": "https://web.archive.org/web/20261022212952/https://www.act.org.nz/expanding-charter-schools",
              "type": "official"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour would end charter schools and transition them into the state system.",
            "basis": "End charter schools",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens say education is not a business and oppose charter schools.",
            "basis": null,
            "source": {
              "label": "Green Party: Education — an Aotearoa where everyone can reach their potential",
              "url": "https://www.greens.org.nz/manifesto_2026_education",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 0,
            "evidence": "Te Pāti Māori opposes the charter model but supports Māori-led education; some charter schools are iwi-led.",
            "basis": "Create a Māori Education Authority with responsibility for Māori education",
            "source": {
              "label": "'Te Pāti Māori Announces a Māori Education Authority ', 2 August 2026 (accessed 11 August 2026)",
              "url": "https://web.archive.org/web/20260811032531/https://www.scoop.co.nz/stories/PA2608/S00006/te-pati-maori-announces-maori-education-authority-to-restore-maori-success-in-education.htm?_gl=1%2A1x1ylqz%2A_gcl_au%2AMTk4NTg5NzkzNi4xNzg2NDAxNDc5%2A_ga%2AMTA2ODM2Mjg3Mi4xNzg2NDAxNDc5%2A_ga_GGVMM3MB82%2AczE3ODY0MTg1OTkkbzIkZzEkdDE3ODY0MTg3MTAkajUzJGwwJGgw",
              "type": "official"
            }
          },
          "top": {
            "stance": -1,
            "evidence": "TOP wants existing charter schools to run for several years before any expansion, to build an evidence base.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Education — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/education",
              "type": "secondary"
            }
          }
        },
        "glossary": [
          "charter-schools"
        ]
      },
      {
        "id": "ed2",
        "text": "The Government should keep free school lunches for all children.",
        "plain": "Every child at a participating school would get a free lunch, regardless of family income.",
        "context": "Supporters say food insecurity harms learning and that universal lunches reduce stigma. Critics say the money could be targeted to children who need it most, and that the programme has had waste and quality problems.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would restore locally made school lunches for the 244,400 students already covered.",
            "basis": "Ensure schools provide locally-made lunches",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would keep and expand free school lunches to about 400 more schools.",
            "basis": "Keep and expand the free school lunches programme",
            "source": {
              "label": "'Green Party announces plan for free and nutritious school lunches', 20 August 2026 (accessed 21 August 2026)",
              "url": "https://web.archive.org/web/20260820233515/https://www.greens.org.nz/green_party_announces_plan_for_free_and_nutritious_school_lunches",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports expanding school lunches as part of its education policy.",
            "basis": null,
            "source": {
              "label": "RNZ: Education policy guide 2026 — Te Pāti Māori",
              "url": "https://www.rnz.co.nz/news/politics_election-2026/feature/education-policy-guide",
              "type": "secondary"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would rebuild the school lunch programme.",
            "basis": "Rebuild the school lunch programme",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "The government has kept a reduced, targeted school lunch programme, not universal free lunches.",
            "basis": null,
            "source": {
              "label": "RNZ: A plan for a fairer food system — which party policies align best (2026)",
              "url": "https://www.rnz.co.nz/news/politics_election-2026/1952831/a-plan-exists-for-a-fairer-and-healthier-food-system-which-party-policies-align-best",
              "type": "secondary"
            }
          }
        }
      },
      {
        "id": "ed3",
        "text": "The Government should make tertiary education fees-free and restore universal student allowances.",
        "plain": "University, polytechnic and trade study would be free, and students would get a weekly allowance regardless of their parents' income.",
        "context": "Supporters say debt deters people from study and that education is a public good. Critics say fees-free is expensive, poorly targeted, and does not fix the underlying costs of housing and living.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would introduce fees-free tertiary education, universal student allowances and paid placements.",
            "basis": "Introduce fees-free tertiary education, universal student allowances and paid placements",
            "source": {
              "label": "'Tertiary Education', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813030938/https://www.greens.org.nz/manifesto_2026_tertiary_education",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori would write off student loans for graduates who stay and work in New Zealand and introduce a universal student allowance.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Education — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/education",
              "type": "secondary"
            }
          },
          "labour": {
            "stance": -1,
            "evidence": "Labour would cut 10% of student loan balances, not make tertiary education fees-free.",
            "basis": "Remove 10% of student loan balance from certain graduates",
            "source": {
              "label": "'Cutting student debt' (PDF), 27 September 2026 (accessed 27 September 2026)",
              "url": "https://web.archive.org/web/20260927082853/https://www.labour.org.nz/news/release-labour-to-cut-student-debt/",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National scrapped fees-free and focuses on loan repayment settings.",
            "basis": null,
            "source": {
              "label": "National: Teaching the basics brilliantly",
              "url": "https://www.national.org.nz/policies/education-teaching-the-basics-brilliantly",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT opposed fees-free and wants students to face more of the cost of their study.",
            "basis": "Make Student Service Fees voluntary",
            "source": {
              "label": "'ACT to campaign on making Student Services Fees voluntary', 10 August 2026 (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260817225426/https://www.act.org.nz/news/act-to-campaign-on-making-student-services-fees-voluntary",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -1,
            "evidence": "NZ First ended fees-free in 2026 and favours targeted support for in-demand graduates.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Education — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/education",
              "type": "secondary"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP focuses on tertiary research and student loan interest, not fees-free study.",
            "basis": "Introduce a 20-year resource and research plan for the tertiary sector ",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "ed4",
        "text": "The Government should require schools to teach New Zealand history, including Te Tiriti o Waitangi.",
        "plain": "All schools would have to teach a shared New Zealand history curriculum that includes the Treaty and its effects.",
        "context": "Supporters say a shared history helps citizens understand the country and each other. Critics say the curriculum should focus on core skills and that parents should have more say over contested content.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would restore Treaty obligations in schools and support Māori autonomy over education.",
            "basis": "Give Māori more autonomy over their education and require school boards to give effect to Te Tiriti",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens want Te Tiriti at the heart of education and public decision-making.",
            "basis": null,
            "source": {
              "label": "Green Party: Te Tiriti o Waitangi — advancing an Aotearoa that embraces Te Tiriti",
              "url": "https://www.greens.org.nz/manifesto_2026_te_tiriti_o_waitangi",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori wants Māori history and te reo embedded in education.",
            "basis": "Create a Māori Education Authority with responsibility for Māori education",
            "source": {
              "label": "'Te Pāti Māori Announces a Māori Education Authority ', 2 August 2026 (accessed 11 August 2026)",
              "url": "https://web.archive.org/web/20260811032531/https://www.scoop.co.nz/stories/PA2608/S00006/te-pati-maori-announces-maori-education-authority-to-restore-maori-success-in-education.htm?_gl=1%2A1x1ylqz%2A_gcl_au%2AMTk4NTg5NzkzNi4xNzg2NDAxNDc5%2A_ga%2AMTA2ODM2Mjg3Mi4xNzg2NDAxNDc5%2A_ga_GGVMM3MB82%2AczE3ODY0MTg1OTkkbzIkZzEkdDE3ODY0MTg3MTAkajUzJGwwJGgw",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would include Te Tiriti and Aotearoa history in education.",
            "basis": "Include te Tiriti and Aotearoa history in education",
            "source": {
              "label": "'Future Fit Education', undated (accessed 19 August 2026)",
              "url": "https://web.archive.org/web/20260819042902/https://www.opportunity.org.nz/future_fit_education",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National removed compulsory Treaty education from schools.",
            "basis": null,
            "source": {
              "label": "The Spinoff: Where political parties stand on Te Tiriti o Waitangi (25 Aug 2026)",
              "url": "https://thespinoff.co.nz/atea/25-08-2026/where-political-parties-stand-on-te-tiriti-o-waitangi",
              "type": "secondary"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT wants to scale back Treaty principles in law and public services.",
            "basis": null,
            "source": {
              "label": "ACT: Equal Rights & Democracy policy",
              "url": "https://www.act.org.nz/policies/democracy",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -1,
            "evidence": "NZ First opposes what it calls Treaty 'mission creep' in public services and education.",
            "basis": null,
            "source": {
              "label": "The Spinoff: Where political parties stand on Te Tiriti o Waitangi (25 Aug 2026)",
              "url": "https://thespinoff.co.nz/atea/25-08-2026/where-political-parties-stand-on-te-tiriti-o-waitangi",
              "type": "secondary"
            }
          }
        },
        "glossary": [
          "te-tiriti"
        ]
      }
    ],
    "blindedHotTopic": "Literacy and numeracy, school lunches, charter schools and student debt are all contested. The debate is whether to expand school choice, keep universal lunches, make tertiary study free, or focus on the basics. The history curriculum is also a flashpoint."
  },
  {
    "id": "justice",
    "number": 5,
    "title": "Crime and justice",
    "shortTitle": "Crime & justice",
    "intro": "Violent crime, youth offending, gang powers and prison numbers are all debated. Parties differ on punishment, prevention and rehabilitation.",
    "hotTopic": "National, ACT and NZ First are campaigning on tougher sentences, gang powers and more prison capacity. Labour says it will keep the gang patch ban but opposes boot camps and emphasises youth justice. The Greens and Te Pāti Māori want a rehabilitation-first approach, with Te Pāti Māori aiming to abolish prisons by 2040. TOP wants more rehabilitation and a smaller prison population. The evidence on deterrence, rehabilitation and public safety is contested, and the cost of imprisonment is significant.",
    "debate": "Tough sentences can keep dangerous people away from the community, but they are expensive and can make rehabilitation harder. Prevention and rehabilitation can reduce reoffending, but they require upfront investment and may not satisfy victims or the public in the short term.",
    "sources": [
      {
        "label": "Ministry of Justice: Justice sector data",
        "url": "https://www.justice.govt.nz/"
      },
      {
        "label": "New Zealand Police",
        "url": "https://www.police.govt.nz/"
      }
    ],
    "statements": [
      {
        "id": "c1",
        "text": "The Government should keep Three Strikes laws for repeat violent offenders.",
        "plain": "Judges would have to impose maximum sentences for a third serious violent or sexual offence, with limited exceptions.",
        "context": "Supporters say it protects the public and sends a clear message. Critics say it removes judicial discretion and leads to unjust sentences.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National restored Three Strikes and campaigns on staying tough on crime.",
            "basis": null,
            "source": {
              "label": "National: Our Plan (2026)",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT is a strong supporter of Three Strikes and wants to extend it to repeat burglary.",
            "basis": null,
            "source": {
              "label": "ACT: Law & Order policy",
              "url": "https://www.act.org.nz/policies/law-and-order",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 1,
            "evidence": "NZ First supports tougher sentences for serious crime; the source does not make a specific 2026 Three Strikes commitment.",
            "basis": "Increase sentence lengths for murder",
            "source": {
              "label": "'Tougher Sentences, Degrees of Murder, Smashing Organised Crime, Life Means Life', undated (accessed 26 October 2026)",
              "url": "https://web.archive.org/web/20261025221236/https://www.nzfirst.nz/tougher_sentences_degrees_of_murder_smashing_organised_crime_life_means_life",
              "type": "official"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour repealed Three Strikes in 2022 and opposes restoring it.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Law & Order — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/law-and-order",
              "type": "secondary"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens oppose Three Strikes and want rehabilitation-first justice.",
            "basis": "Prioritise rehabilitation for convicted offenders ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori wants restorative justice and the eventual abolition of prisons.",
            "basis": "Move towards restorative justice ",
            "source": {
              "label": "'Justice', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042919/https://www.maoriparty.org.nz/justice",
              "type": "official"
            }
          },
          "top": {
            "stance": -1,
            "evidence": "TOP's justice platform is rehabilitative and opposes punitive sentencing.",
            "basis": "Boost court and rehabilitation funding to reduce reoffending",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        },
        "glossary": [
          "three-strikes"
        ]
      },
      {
        "id": "c2",
        "text": "The Government should give police more powers to deal with gangs, including banning gang patches.",
        "plain": "Police would have extra search, dispersal or association powers, and wearing gang insignia in public would be illegal.",
        "context": "Supporters say gangs intimidate communities and that visible insignia and power displays should be curbed. Critics say the ban can increase marginalisation and that police already have enough powers.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National introduced the gang patch ban and campaigns on cracking down on gangs.",
            "basis": null,
            "source": {
              "label": "National: Our Plan (2026)",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT backs stronger public safety powers and consequences for gang offending.",
            "basis": null,
            "source": {
              "label": "ACT: Law & Order policy",
              "url": "https://www.act.org.nz/policies/law-and-order",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First wants tougher police powers and a focus on organised crime.",
            "basis": "Focus police resources on combating transnational organised crime",
            "source": {
              "label": "'Tougher Sentences, Degrees of Murder, Smashing Organised Crime, Life Means Life', undated (accessed 26 October 2026)",
              "url": "https://web.archive.org/web/20261025221236/https://www.nzfirst.nz/tougher_sentences_degrees_of_murder_smashing_organised_crime_life_means_life",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour says it will keep the gang patch ban if elected.",
            "basis": null,
            "source": {
              "label": "Newsroom: Gangs now have greater influence on election (29 Oct 2026)",
              "url": "https://newsroom.co.nz/2026/10/29/gangs-now-have-greater-influence-on-election/",
              "type": "secondary"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens oppose the gang patch ban and want prevention and rehabilitation.",
            "basis": null,
            "source": {
              "label": "Green Party: Justice and community safety",
              "url": "https://www.greens.org.nz/manifesto_2026_justice_and_community_safety",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori opposes the gang patch ban and punitive gang powers.",
            "basis": "Move towards restorative justice ",
            "source": {
              "label": "'Justice', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042919/https://www.maoriparty.org.nz/justice",
              "type": "official"
            }
          },
          "top": {
            "stance": -1,
            "evidence": "TOP favours rehabilitation and evidence-based justice over gang enforcement.",
            "basis": "Boost court and rehabilitation funding to reduce reoffending",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        },
        "glossary": [
          "gang-patch-ban"
        ]
      },
      {
        "id": "c3",
        "text": "The Government should focus on rehabilitation and reducing the prison population rather than building more prisons.",
        "plain": "More money would go to education, treatment and reintegration, with a target to send fewer people to prison.",
        "context": "Supporters say prison is expensive and often makes reoffending worse. Critics say prison protects the public and that reducing the prison population without alternatives can put communities at risk.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would prioritise rehabilitation and reduce the prison population.",
            "basis": "Prioritise rehabilitation for convicted offenders ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori wants restorative justice and to abolish prisons by 2040.",
            "basis": "Move towards restorative justice ",
            "source": {
              "label": "'Justice', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042919/https://www.maoriparty.org.nz/justice",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would boost rehabilitation funding and reduce the prison population.",
            "basis": "Boost court and rehabilitation funding to reduce reoffending",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour opposes boot camps and emphasises youth justice, but also supports some tougher sentences.",
            "basis": "Stop running youth offender boot camps",
            "source": {
              "label": "'National must scrap its failed boot camps', 1 September 2026 (accessed 01 September 2026)",
              "url": "https://web.archive.org/web/20260901043339/https://www.labour.org.nz/news/release-national-must-scrap-its-failed-boot-camps/",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National is adding prison capacity and campaigning on tougher sentences.",
            "basis": "Add 240 beds to Christchurch Men's Prison",
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT wants minimum sentences for repeat burglary and a tougher justice system.",
            "basis": null,
            "source": {
              "label": "ACT: Law & Order policy",
              "url": "https://www.act.org.nz/policies/law-and-order",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First wants longer sentences for serious crime.",
            "basis": "Increase sentence lengths for murder",
            "source": {
              "label": "'Tougher Sentences, Degrees of Murder, Smashing Organised Crime, Life Means Life', undated (accessed 26 October 2026)",
              "url": "https://web.archive.org/web/20261025221236/https://www.nzfirst.nz/tougher_sentences_degrees_of_murder_smashing_organised_crime_life_means_life",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "c4",
        "text": "The Government should run military-style boot camps for young offenders.",
        "plain": "Young people who commit serious offences would attend a residential programme with military-style discipline and training.",
        "context": "Supporters say the programmes instil discipline and routine. Critics say they are expensive, ineffective and can traumatise young people who need treatment and education.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National created the Young Serious Offender category and military-style academies.",
            "basis": null,
            "source": {
              "label": "National: Our Plan (2026)",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT supports tougher youth justice, including youth detention run by Corrections.",
            "basis": null,
            "source": {
              "label": "ACT: Law & Order policy",
              "url": "https://www.act.org.nz/policies/law-and-order",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First supports the coalition's tough youth justice measures, including military academies.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Law & Order — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/law-and-order",
              "type": "secondary"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour would stop running youth offender boot camps.",
            "basis": "Stop running youth offender boot camps",
            "source": {
              "label": "'National must scrap its failed boot camps', 1 September 2026 (accessed 01 September 2026)",
              "url": "https://web.archive.org/web/20260901043339/https://www.labour.org.nz/news/release-national-must-scrap-its-failed-boot-camps/",
              "type": "official"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens would end military-style academies and invest in community rehabilitation.",
            "basis": "End military-style academies for young offenders ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori opposes boot camps and wants community-led healing.",
            "basis": "Move towards restorative justice ",
            "source": {
              "label": "'Justice', undated (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818042919/https://www.maoriparty.org.nz/justice",
              "type": "official"
            }
          },
          "top": {
            "stance": -2,
            "evidence": "TOP's justice platform is rehabilitative and opposes boot camps.",
            "basis": "Boost court and rehabilitation funding to reduce reoffending",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        },
        "glossary": [
          "boot-camps"
        ]
      }
    ],
    "blindedHotTopic": "Violent crime and youth offending are debated alongside prison numbers and rehabilitation. The debate is whether to impose tougher sentences and give police more powers, or invest in prevention and rehabilitation. Gang powers and boot camps are especially contested."
  },
  {
    "id": "climate",
    "number": 6,
    "title": "Climate and environment",
    "shortTitle": "Climate",
    "intro": "New Zealand has a 2050 net-zero target, but emissions from agriculture and transport remain challenging. Parties differ on oil and gas, farm emissions and how fast to move to clean energy.",
    "hotTopic": "The climate debate is now about cost and pace. National says it is committed to net zero but rejects policies that raise costs, and it has reopened oil and gas exploration. ACT would scrap the net-zero target and the carbon tax. Labour would reinstate the offshore exploration ban and review the ETS. The Greens and TOP would include agriculture in the ETS and move faster on renewables. NZ First would withdraw from the Paris Agreement and remove fuel from the ETS. Te Pāti Māori frames climate action as kaitiakitanga and sovereignty.",
    "debate": "Every climate policy involves a trade-off between emissions, cost and fairness. Pricing emissions can change behaviour but raises costs; regulation can be effective but rigid; subsidies can speed up change but cost taxpayers. The burden often falls unevenly on rural, low-income and Māori communities.",
    "sources": [
      {
        "label": "Ministry for the Environment: Climate data",
        "url": "https://www.mfe.govt.nz/climate-change"
      },
      {
        "label": "Climate Change Commission",
        "url": "https://www.climatecommission.govt.nz/"
      }
    ],
    "statements": [
      {
        "id": "cl1",
        "text": "The Government should ban new offshore oil and gas exploration.",
        "plain": "No new permits would be issued to explore for offshore oil and gas, although existing permits could continue.",
        "context": "Supporters say new fossil fuel exploration locks in emissions and delays the clean energy transition. Critics say domestic gas is needed for energy security and that banning exploration pushes production offshore.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would reinstate the offshore oil and gas exploration ban.",
            "basis": "Reinstate the ban on offshore oil and gas exploration",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would reinstate the ban and revoke permits granted under the fast-track process.",
            "basis": null,
            "source": {
              "label": "Green Party: Energy — powering Aotearoa with affordable renewable energy",
              "url": "https://www.greens.org.nz/manifesto_2026_energy",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori opposes fossil fuel expansion and wants a just transition.",
            "basis": "Reduce dependence on fossil fuels to protect sovereignty ",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP opposes new fossil fuel infrastructure and plans a renewables-only energy system.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Energy — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/energy",
              "type": "secondary"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National promotes more domestic energy production and has reopened oil and gas exploration.",
            "basis": null,
            "source": {
              "label": "National: Electrify NZ 2.0 — energy plan",
              "url": "https://www.national.org.nz/policies/electrify-nz-2",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT wants to expand domestic energy production, including oil and gas.",
            "basis": null,
            "source": {
              "label": "ACT: Unlocking Mineral and Energy Wealth (PDF)",
              "url": "https://web.archive.org/web/20261008001739/https://assets.nationbuilder.com/actnz/pages/38384/attachments/original/1791257386/Unlocking_Mineral_and_Energy_Wealth.pdf?1791257386",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -1,
            "evidence": "NZ First wants to expand mineral and energy extraction; it has no specific 2026 commitment on new offshore oil and gas exploration.",
            "basis": "Survey all of NZ to look for minerals ",
            "source": {
              "label": "NZ First: Our Policy 2026 (official)",
              "url": "https://www.nzfirst.nz/policy",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "cl2",
        "text": "The Government should price agricultural emissions to help meet climate targets.",
        "plain": "Farmers would pay for some of the methane and nitrous oxide their farms produce, either through the ETS or a separate levy.",
        "context": "Supporters say agriculture is the largest source of emissions and should not be exempt. Critics say pricing farm emissions could reduce production, push farming offshore and hurt rural communities.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would include agriculture in emissions pricing and reduction efforts.",
            "basis": "Include agriculture, shipping and aviation in emissions calculations and reduction efforts",
            "source": {
              "label": "'Climate Action: Emissions Reduction', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813023241/https://www.greens.org.nz/manifesto_2020_climate_action_emissions_reduction",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would strengthen the ETS and include agriculture.",
            "basis": "Strengthen the Emissions Trading Scheme and include agriculture",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour would review the ETS and supports farm-level climate action, but has not made pricing agriculture a headline promise.",
            "basis": "Review the Emissions Trading Scheme",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports regenerative agriculture and emissions reduction in line with Māori values.",
            "basis": "Support sustainable and regenerative means of emissions reduction in line with Māori values",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National would keep agricultural emissions out of the ETS.",
            "basis": "Maintain the current position of agricultural emissions not being priced or offset through the ETS",
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would keep agriculture out of the ETS.",
            "basis": "Ensure agriculture is not part of the emissions trading scheme",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 0,
            "evidence": "NZ First opposes the Paris Agreement and fuel carbon pricing, but has no specific 2026 policy on pricing agricultural emissions.",
            "basis": "Withdraw from the Paris climate agreement",
            "source": {
              "label": "'We Will Withdraw From The Paris Accord', undated (accessed 26 October 2026)",
              "url": "https://web.archive.org/web/20261026042927/https://www.nzfirst.nz/withdraw_from_paris_accord",
              "type": "official"
            }
          }
        },
        "glossary": [
          "agricultural-emissions",
          "ets"
        ]
      },
      {
        "id": "cl3",
        "text": "The Government should keep the 2050 net-zero climate target, even if it requires tough choices.",
        "plain": "New Zealand would stay committed to balancing its greenhouse gas emissions by 2050, even if some policies are unpopular.",
        "context": "Supporters say the target is essential for climate credibility and long-term investment. Critics say the target is unrealistic without new technology and that it imposes costs on households and farmers.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour supports the Paris Agreement and the net-zero target.",
            "basis": null,
            "source": {
              "label": "Labour: Fiscal Plan 2026 — climate and infrastructure",
              "url": "https://www.labour.org.nz/fiscal-plan",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would enforce climate legislation and keep the net-zero target.",
            "basis": "Enforce timely and effective implementation of climate legislation",
            "source": {
              "label": "'Climate Change Policy', undated (accessed 31 August 2026)",
              "url": "https://web.archive.org/web/20260902215049/https://www.greens.org.nz/climate_change_policy",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori supports climate action and adaptation.",
            "basis": "Invest in adaptation for communities most at risk from climate change",
            "source": {
              "label": "'Climate', 3 June 2026 (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818043455/https://www.maoriparty.org.nz/climate",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would align New Zealand's emissions goals with the Paris Agreement.",
            "basis": "Ensure NZ's emissions goals align with the Paris Agreement",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "national": {
            "stance": 1,
            "evidence": "National says it is committed to net zero by 2050, but rejects policies that raise costs.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Environment — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/environment",
              "type": "secondary"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would scrap the net-zero target and the carbon tax.",
            "basis": "Reduce emissions with a focus on new technology",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First would withdraw from the Paris Agreement.",
            "basis": "Withdraw from the Paris climate agreement",
            "source": {
              "label": "'We Will Withdraw From The Paris Accord', undated (accessed 26 October 2026)",
              "url": "https://web.archive.org/web/20261026042927/https://www.nzfirst.nz/withdraw_from_paris_accord",
              "type": "official"
            }
          }
        },
        "glossary": [
          "net-zero",
          "ets"
        ]
      },
      {
        "id": "cl4",
        "text": "The Government should phase out fossil-fuel vehicles and encourage electric vehicles.",
        "plain": "New petrol and diesel cars would eventually be restricted, and electric vehicles would get financial or regulatory support.",
        "context": "Supporters say transport is a large source of emissions and that EV incentives speed up the shift. Critics say EVs are still expensive, and that subsidies mainly help wealthier households.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would phase out fossil-fuel vehicle imports and incentivise EVs.",
            "basis": "Phase out fossil-fuel vehicle imports and incentivise electric vehicles",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would offer incentives for businesses to buy electric vehicles.",
            "basis": "Offer incentives to businesses to buy electric vehicles ",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour supports the Clean Vehicle Standard and EV uptake, but has not promised a full fossil-fuel vehicle phase-out.",
            "basis": null,
            "source": {
              "label": "Labour: Our Policies — transport and climate",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports reducing dependence on fossil fuels.",
            "basis": "Reduce dependence on fossil fuels to protect sovereignty ",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National would review the Clean Vehicle Standard rather than phase out fossil-fuel vehicles.",
            "basis": "Review and revise the Clean Vehicle Standard",
            "source": {
              "label": "'Government to retain Clean Vehicle Standard ', 21 August 2026 (accessed 24 August 2026)",
              "url": "https://web.archive.org/web/20260823214132/https://www.national.org.nz/news/20260821-honchrisbishop",
              "type": "official"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT would add an affordability test to used-car import rules and scrap the carbon tax.",
            "basis": "Introduce an affordability test on used-car import regulations",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First would remove petrol and diesel from the ETS.",
            "basis": "Remove both petrol and diesel from the emissions trading scheme",
            "source": {
              "label": "'Remove The Climate Tax From Fuel', undated (accessed 26 October 2026)",
              "url": "https://www.nzfirst.nz/remove_the_climate_tax_from_fuel",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "New Zealand has a 2050 net-zero target, but it is contested, along with the pace and cost. The debate is whether to keep or scrap the target, ban new oil and gas exploration, price agricultural emissions, and phase out fossil-fuel vehicles. Rural communities and households are worried about costs."
  },
  {
    "id": "immigration",
    "number": 7,
    "title": "Immigration and workforce",
    "shortTitle": "Immigration",
    "intro": "Workforce shortages in health, trades and agriculture sit alongside concerns about wages and housing. Parties differ on how open immigration should be and how to protect migrant workers.",
    "hotTopic": "New Zealand relies on migration to fill skills gaps, but the settings are contested. National and ACT favour targeted immigration and faster visa processing. Labour wants an immigration statement that reflects workforce needs and more flexibility for migrants to change employers. The Greens want stronger rights and a path to residency. NZ First wants a shortage-led system that prioritises New Zealanders and a longer wait for residency and benefits. Te Pāti Māori emphasises training locals. TOP is strongly pro-immigration and wants to reduce barriers for skilled workers.",
    "debate": "Immigration can ease shortages and grow the economy, but it can also add pressure to housing and infrastructure and weaken the bargaining power of local workers. The design of visas, residency and support matters as much as the headline numbers.",
    "sources": [
      {
        "label": "MBIE: Immigration New Zealand",
        "url": "https://www.immigration.govt.nz/"
      },
      {
        "label": "Stats NZ: Migration data",
        "url": "https://www.stats.govt.nz/indicators/migration"
      }
    ],
    "statements": [
      {
        "id": "i1",
        "text": "The Government should increase immigration to fill workforce shortages.",
        "plain": "More work visas and residency places would be available for occupations where employers cannot find local workers.",
        "context": "Supporters say shortages in health, trades and agriculture are holding back the economy. Critics say immigration can suppress wages and add pressure to housing and public services.",
        "positions": {
          "national": {
            "stance": 0,
            "evidence": "National's 2026 policy index includes targeted visas, but it does not campaign on increasing immigration numbers.",
            "basis": null,
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": 1,
            "evidence": "ACT backs immigration to fill genuine shortages and would add a rural workforce visa.",
            "basis": "Create a rural workforce visa",
            "source": {
              "label": "'A Rural Workforce Visa', undated (accessed 24 October 2026)",
              "url": "https://web.archive.org/web/20261024034520/https://www.act.org.nz/rural-visa",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour would set an immigration statement based on workforce needs.",
            "basis": "Create an immigration statement that reflects NZ's needs",
            "source": {
              "label": "'Labour to ensure an immigration system that works for New Zealand', 11 September 2026 (accessed 12 September 2026)",
              "url": "https://web.archive.org/web/20260912025858/https://www.labour.org.nz/news/release-labour-to-ensure-an-immigration-system-that-works-for-new-zealand-1/",
              "type": "official"
            }
          },
          "green": {
            "stance": 1,
            "evidence": "The Greens support migrant workers and a path to residency.",
            "basis": "Support migrant workers to residency ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP is pro-immigration and would reduce barriers for skilled workers.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Immigration — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/immigration",
              "type": "secondary"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First would replace the accredited employer visa with a stricter, shortage-led system.",
            "basis": "Replace the Accredited Employer Work Visa with a shortage-led skilled work visa",
            "source": {
              "label": "'Scrapping Accredited Working Visa Model', undated (accessed 26 October 2026)",
              "url": "https://web.archive.org/web/20261026044838/https://www.nzfirst.nz/scrapping_accredited_working_visa_model",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -1,
            "evidence": "Te Pāti Māori prioritises training and upskilling local workers, especially Māori.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Immigration — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/immigration",
              "type": "secondary"
            }
          }
        }
      },
      {
        "id": "i2",
        "text": "The Government should reduce the number of temporary work visas and prioritise New Zealanders for jobs.",
        "plain": "Fewer temporary work visas would be issued, and employers would have to show they have tried to hire New Zealanders first.",
        "context": "Supporters say it protects local workers and prevents exploitation. Critics say it can leave genuine shortages unfilled and harm sectors that depend on migrant labour.",
        "positions": {
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First would replace the accredited employer visa with a stricter, shortage-led system.",
            "basis": "Replace the Accredited Employer Work Visa with a shortage-led skilled work visa",
            "source": {
              "label": "'Scrapping Accredited Working Visa Model', undated (accessed 26 October 2026)",
              "url": "https://web.archive.org/web/20261026044838/https://www.nzfirst.nz/scrapping_accredited_working_visa_model",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori prioritises training and upskilling local workers.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Immigration — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/immigration",
              "type": "secondary"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National has tightened some migrant entitlements but still uses immigration to fill skills gaps.",
            "basis": null,
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT backs immigration to fill genuine shortages and would add a rural workforce visa.",
            "basis": "Create a rural workforce visa",
            "source": {
              "label": "'A Rural Workforce Visa', undated (accessed 24 October 2026)",
              "url": "https://web.archive.org/web/20261024034520/https://www.act.org.nz/rural-visa",
              "type": "official"
            }
          },
          "labour": {
            "stance": -1,
            "evidence": "Labour would give migrants more ability to change employers, not reduce visas.",
            "basis": "Allow migrants to move between accredited employers\n",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens want stronger migrant rights and a path to residency.",
            "basis": "Support migrant workers to residency ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "top": {
            "stance": -2,
            "evidence": "TOP is pro-immigration and would reduce barriers for skilled workers.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Immigration — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/immigration",
              "type": "secondary"
            }
          }
        }
      },
      {
        "id": "i3",
        "text": "The Government should raise the refugee quota.",
        "plain": "New Zealand would accept more refugees each year through the official resettlement programme.",
        "context": "Supporters say New Zealand is a wealthy country with a responsibility to help people fleeing war and persecution. Critics say resettlement costs money and that the focus should be on skilled migrants and local needs.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would increase the refugee quota.",
            "basis": "Increase the refugee quota ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour would make community refugee sponsorship additional to the quota.",
            "basis": "Make community refugee sponsorship additional to the annual refugee quota",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports refugee resettlement and a Pacific-focused foreign policy.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Policy — mana motuhake and Pacific relationships",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -1,
            "evidence": "NZ First takes a restrictive approach to immigration; it has no specific 2026 commitment to raise the refugee quota.",
            "basis": "Expand criteria for deportation ",
            "source": {
              "label": "NZ First: Our Policy 2026 (official)",
              "url": "https://www.nzfirst.nz/policy",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "i4",
        "text": "The Government should make it easier for migrants to become permanent residents and citizens.",
        "plain": "Migrants who have lived and worked in New Zealand for several years would have a clearer and faster path to residency and citizenship.",
        "context": "Supporters say certainty helps migrants settle, invest and fill long-term shortages. Critics say residency should be earned and that easier pathways can increase migration pressure.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would support migrant workers to gain residency.",
            "basis": "Support migrant workers to residency ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour would create a citizenship pathway for migrants' children born in New Zealand.",
            "basis": "Establish a citizenship pathway for migrants' children born in NZ",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National would expedite visas for partners of citizens, but has tightened benefit entitlements for new residents.",
            "basis": null,
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would add a physical presence test and annual expiry to some visas.",
            "basis": "Add a physical presence test to permanent residents",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First would lengthen residency and citizenship eligibility and impose a long benefit stand-down.",
            "basis": "Create a benefit stand-down period of ten years for migrants and lengthen residency and citizenship eligibility",
            "source": {
              "label": "NZ First: Our Policy 2026 (official)",
              "url": "https://www.nzfirst.nz/policy",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "Workforce shortages in health, trades and agriculture sit alongside concerns about wages and housing. The debate is whether to open more work visas, tighten temporary migration, raise the refugee quota, or make residency easier. Migrant worker protections are also in play."
  },
  {
    "id": "foreign",
    "number": 8,
    "title": "Foreign policy and defence",
    "shortTitle": "Foreign affairs",
    "intro": "New Zealand faces pressure to spend more on defence and to take clearer positions on security alliances and conflicts. Parties differ on defence spending, AUKUS, Palestine and aid.",
    "hotTopic": "The government has committed to lifting defence spending to 2% of GDP over eight years. National supports that path; ACT and NZ First want to go further and faster, with NZ First calling for 3%. Labour rejects a percentage target, while the Greens and Te Pāti Māori oppose a military build-up. AUKUS Pillar II is also contested: ACT and NZ First are open to exploring it, while National and Labour have both given it a thumbs-down. Labour, the Greens and Te Pāti Māori would recognise Palestine; the government has not. National and ACT would cut foreign aid; Labour and the Greens would increase it.",
    "debate": "Foreign policy is about values and interests, and the trade-offs are often indirect. More defence spending can buy security and influence but uses money that could go to aid, health or climate adaptation. Alliances can provide protection but may constrain independent decision-making.",
    "sources": [
      {
        "label": "MFAT",
        "url": "https://www.mfat.govt.nz/"
      },
      {
        "label": "New Zealand Defence Force",
        "url": "https://www.nzdf.mil.nz/"
      }
    ],
    "statements": [
      {
        "id": "f1",
        "text": "The Government should increase defence spending to at least 2% of GDP.",
        "plain": "New Zealand would spend at least two dollars out of every hundred dollars of national income on defence.",
        "context": "Supporters say the security environment has worsened and that New Zealand needs to pull its weight with allies. Critics say the money would be better spent on health, climate adaptation and diplomacy.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National supports lifting defence spending to more than 2% of GDP over eight years.",
            "basis": null,
            "source": {
              "label": "NZ Defence Force: Defence Capability Plan (2026)",
              "url": "https://www.defence.govt.nz/news/defence-capability-plan-released/",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT supports the 2% defence spending direction and a stronger military.",
            "basis": null,
            "source": {
              "label": "Waatea News: War or peace? Election report exposes deep divide over defence spending, AUKUS (24 Oct 2026)",
              "url": "https://waateanews.com/2026/10/24/war-or-peace-election-report-exposes-deep-divide-over-defence-spending-aukus-and-new-zealands-future/",
              "type": "secondary"
            }
          },
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First wants defence spending to reach 3% of GDP by the early 2030s.",
            "basis": null,
            "source": {
              "label": "Waatea News: War or peace? Election report exposes deep divide over defence spending, AUKUS (24 Oct 2026)",
              "url": "https://waateanews.com/2026/10/24/war-or-peace-election-report-exposes-deep-divide-over-defence-spending-aukus-and-new-zealands-future/",
              "type": "secondary"
            }
          },
          "labour": {
            "stance": -1,
            "evidence": "Labour rejects a percentage target for defence spending.",
            "basis": null,
            "source": {
              "label": "RNZ: Aid versus defence — parties clash on foreign policy spending priorities (2026)",
              "url": "https://www.rnz.co.nz/news/pacific/1778531/aid-versus-defence-parties-clash-on-foreign-policy-spending-priorities",
              "type": "secondary"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens oppose a military build-up and prioritise diplomacy, climate and Pacific resilience.",
            "basis": null,
            "source": {
              "label": "Green Party: Global affairs and trade",
              "url": "https://www.greens.org.nz/manifesto_2026_global_affairs_and_trade",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori wants New Zealand to be militarily neutral and focus on the Pacific.",
            "basis": "Declare NZ a \"military neutral\" country",
            "source": {
              "label": "'Military Neutrality', 3 June 2026 (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818013137/https://www.maoriparty.org.nz/military_neutrality",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "f2",
        "text": "New Zealand should join AUKUS Pillar 2 and work more closely with the United States on defence.",
        "plain": "New Zealand would cooperate with Australia, the UK and the US on advanced military technology and possibly other defence work.",
        "context": "Supporters say Pillar 2 could give New Zealand access to technology and intelligence and strengthen alliances. Critics say it could compromise New Zealand's independent foreign policy and nuclear-free stance.",
        "positions": {
          "act": {
            "stance": 2,
            "evidence": "ACT is open to joining AUKUS Pillar II and working more closely with like-minded partners.",
            "basis": null,
            "source": {
              "label": "Lowy Institute: The power broker in New Zealand's election has no foreign policy (2026)",
              "url": "https://www.lowyinstitute.org/the-interpreter/the-power-broker-in-new-zealand-s-election-has-no-foreign-policy",
              "type": "secondary"
            }
          },
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First says AUKUS Pillar II is a 'possibility worth exploring'.",
            "basis": null,
            "source": {
              "label": "1News: Peters says AUKUS Pillar II a 'possibility worth exploring' (2024)",
              "url": "https://www.1news.co.nz/2024/08/01/irresponsible-not-to-investigate-joining-aukus-pillar-ii-peters/",
              "type": "secondary"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "National's foreign affairs spokesperson has given AUKUS Pillar II a thumbs-down.",
            "basis": null,
            "source": {
              "label": "NZ Herald: Joining Pillar II of AUKUS given thumbs-down by National and Labour (4 Nov 2026)",
              "url": "https://www.nzherald.co.nz/nz/politics/election-2026-live-updates-joining-pillar-ii-of-aukus-given-thumbs-down-by-nats-labour-spokespeople/IJVXBSRTIVAQNKOLZXC54MS6LU/",
              "type": "secondary"
            }
          },
          "labour": {
            "stance": -1,
            "evidence": "Labour opposes joining any part of AUKUS, including Pillar II.",
            "basis": null,
            "source": {
              "label": "Anna Fifield: How the election might alter New Zealand's approach to the world (2026)",
              "url": "https://annafifieldnz.substack.com/p/how-the-election-might-alter-new",
              "type": "secondary"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens oppose AUKUS and want an independent, peaceful foreign policy.",
            "basis": null,
            "source": {
              "label": "Green Party: Global affairs and trade — independent, peaceful foreign policy",
              "url": "https://www.greens.org.nz/manifesto_2026_global_affairs_and_trade",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori wants New Zealand to be militarily neutral.",
            "basis": "Declare NZ a \"military neutral\" country",
            "source": {
              "label": "'Military Neutrality', 3 June 2026 (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818013137/https://www.maoriparty.org.nz/military_neutrality",
              "type": "official"
            }
          }
        },
        "glossary": [
          "aukus"
        ]
      },
      {
        "id": "f3",
        "text": "New Zealand should recognise Palestine as a state.",
        "plain": "New Zealand would formally recognise Palestinian statehood, alongside the many countries that already do.",
        "context": "Supporters say recognition supports a two-state solution and Palestinian self-determination. Critics say recognition should come after a negotiated agreement and that it could be seen as rewarding Hamas.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour's 2026 foreign policy commits it to recognising the state of Palestine.",
            "basis": "Recognise the state of Palestine ",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would recognise Palestine and sanction Israel.",
            "basis": "Recognise Palestine as a state and sanction Israel ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori supports full recognition of Palestine without preconditions.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Government's refusal to recognise Palestine entrenches colonial double standards",
              "url": "https://www.maoriparty.org.nz/te_p_ti_m_ori_government_s_refusal_to_recognise_palestine_entrenches_colonial_double_standards",
              "type": "official"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "The government says it is not yet prudent to recognise Palestinian statehood.",
            "basis": null,
            "source": {
              "label": "MFAT: Israel–Hamas conflict — why New Zealand is not recognising Palestinian statehood at this time",
              "url": "https://www.mfat.govt.nz/en/countries-and-regions/middle-east/israel-hamas-conflict",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -1,
            "evidence": "NZ First says recognition is inevitable but has not committed to it now.",
            "basis": null,
            "source": {
              "label": "RNZ: New Zealand's recognition of Palestinian statehood inevitable — Winston Peters",
              "url": "https://www.rnz.co.nz/news/politics/1513968/new-zealand-s-recognition-of-palestinian-statehood-inevitable-winston-peters",
              "type": "secondary"
            }
          }
        }
      },
      {
        "id": "f4",
        "text": "The Government should cut foreign aid and spend the money at home.",
        "plain": "New Zealand would reduce the money it sends to other countries for development and humanitarian support.",
        "context": "Supporters say charity begins at home and that aid should be focused on the Pacific. Critics say aid is a small part of the budget, builds influence, and helps prevent instability and conflict.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National would cut foreign aid outside the Pacific to fund more medicines.",
            "basis": "Increase funding for Pharmac's medicines budget by reducing foreign aid",
            "source": {
              "label": "'Building the Future: More medicines and earlier care' (PDF), 6 October 2026 (accessed 06 October 2026)",
              "url": "https://web.archive.org/web/20261006031134/https://assets.national.org.nz/web/prod/More%20medicines%20and%20earlier%20care.pdf?v=1791237531",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT would reduce foreign aid to 2017 levels.",
            "basis": "Reduce NZ's foreign aid to 2017 levels",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 1,
            "evidence": "NZ First argues aid is not a priority compared with defence and domestic needs.",
            "basis": null,
            "source": {
              "label": "RNZ: Aid versus defence — parties clash on foreign policy spending priorities (2026)",
              "url": "https://www.rnz.co.nz/news/pacific/1778531/aid-versus-defence-parties-clash-on-foreign-policy-spending-priorities",
              "type": "secondary"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour would increase foreign aid to 0.7% of GDP.",
            "basis": "Increase foreign aid to 0.7 percent of GDP",
            "source": {
              "label": "'Labour's foreign policy', 23 September 2026 (accessed 23 September 2026)",
              "url": "https://www.labour.org.nz/news/speech-labours-foreign-policy/",
              "type": "official"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens would increase climate aid to the Pacific.",
            "basis": "Increase climate aid funding to the Pacific",
            "source": {
              "label": "'Pacific Peoples', undated (accessed 13 August 2026)",
              "url": "https://web.archive.org/web/20260813030402/https://www.greens.org.nz/manifesto_2026_pacific_peoples",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -1,
            "evidence": "Te Pāti Māori wants a Pacific-focused foreign policy, not aid cuts.",
            "basis": "Review foreign policy settings and relationships to focus on the Pacific",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "New Zealand faces pressure to spend more on defence and take clearer positions on security alliances and conflicts. The debate is whether to meet the 2% GDP target, join AUKUS Pillar 2, recognise Palestine, or cut foreign aid. These choices affect trade, security and New Zealand's independent voice."
  },
  {
    "id": "tiriti",
    "number": 9,
    "title": "Te Tiriti and democracy",
    "shortTitle": "Te Tiriti",
    "intro": "The Treaty Principles Bill, Māori electorates, co-governance and electoral rules are contested. Parties differ on whether to protect, reform or reduce Treaty-based arrangements.",
    "hotTopic": "The Treaty Principles Bill and the place of Te Tiriti in law are central. ACT wants 'one law for all' and to scale back Treaty principles; NZ First wants a binding referendum on the Māori seats and to replace the Waitangi Tribunal. National says it recognises Te Tiriti but has removed co-governance elements and compulsory Treaty education. Labour would restore Treaty clauses in legislation and education. The Greens and Te Pāti Māori want constitutional transformation, entrenchment of Māori seats and binding Waitangi Tribunal recommendations. TOP opposes the Treaty Principles Bill and supports Te Tiriti and Aotearoa history in schools. The section also covers voting age and political donations.",
    "debate": "These are constitutional questions about who holds power, how it is checked, and how the Crown honours Te Tiriti. They are not just symbolic: they affect resource management, health, education, local government and the courts. Reasonable people disagree about the pace and form of change.",
    "sources": [
      {
        "label": "Waitangi Tribunal",
        "url": "https://www.waitangitribunal.govt.nz/"
      },
      {
        "label": "Electoral Commission",
        "url": "https://elections.nz/"
      }
    ],
    "statements": [
      {
        "id": "t1",
        "text": "The Government should entrench the Māori electorates so they cannot be abolished without Māori consent.",
        "plain": "The seven Māori seats would be protected by a special legal rule that makes them harder to remove.",
        "context": "Supporters say the seats are a constitutional promise and need protection from a simple majority. Critics say entrenchment limits Parliament's sovereignty and that the seats should be reviewed like other electoral rules.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would entrench the Māori electoral seats.",
            "basis": "Entrench the Māori electoral seats ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori's Te Tiriti entrenchment policy would protect Māori seats and constitutional arrangements.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Mana Motuhake — Te Tiriti entrenchment policy",
              "url": "https://www.maoriparty.org.nz/mana_motuhake",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour supports the Māori seats and opposes moves to abolish them, but has not committed to entrenchment.",
            "basis": null,
            "source": {
              "label": "The Spinoff: Where political parties stand on Te Tiriti o Waitangi (25 Aug 2026)",
              "url": "https://thespinoff.co.nz/atea/25-08-2026/where-political-parties-stand-on-te-tiriti-o-waitangi",
              "type": "secondary"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National recognises Te Tiriti but has removed co-governance elements; it has no commitment to entrench the Māori seats.",
            "basis": null,
            "source": {
              "label": "The Spinoff: Where political parties stand on Te Tiriti o Waitangi (25 Aug 2026)",
              "url": "https://thespinoff.co.nz/atea/25-08-2026/where-political-parties-stand-on-te-tiriti-o-waitangi",
              "type": "secondary"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT wants one law for all and opposes Treaty-based separate representation; it has no commitment to entrenching the seats.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Te Tiriti o Waitangi — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/treaty",
              "type": "secondary"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First wants a binding referendum on the future of the Māori seats.",
            "basis": "Introduce a binding referendum on the Māori seats",
            "source": {
              "label": "'NZ First Bill To Enable Binding Referendum On Māori Seats At 2026 Election ', 18 August 2026 (accessed 27 August 2026)",
              "url": "https://web.archive.org/web/20260827010649/https://community.scoop.co.nz/2026/02/nz-first-bill-to-enable-binding-referendum-on-maori-seats-at-2026-election/",
              "type": "official"
            }
          }
        },
        "glossary": [
          "entrench",
          "te-tiriti",
          "co-governance"
        ]
      },
      {
        "id": "t2",
        "text": "The Government should hold a binding referendum on the future of the Māori electorates.",
        "plain": "Voters would decide whether to keep, change or abolish the Māori seats in a public referendum.",
        "context": "Supporters say the seats are a constitutional question that should be decided by the people. Critics say a referendum would put a minority's representation to a majority vote and undermine Te Tiriti.",
        "positions": {
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First has a member's bill for a binding referendum on the Māori seats.",
            "basis": "Introduce a binding referendum on the Māori seats",
            "source": {
              "label": "'NZ First Bill To Enable Binding Referendum On Māori Seats At 2026 Election ', 18 August 2026 (accessed 27 August 2026)",
              "url": "https://web.archive.org/web/20260827010649/https://community.scoop.co.nz/2026/02/nz-first-bill-to-enable-binding-referendum-on-maori-seats-at-2026-election/",
              "type": "official"
            }
          },
          "act": {
            "stance": 0,
            "evidence": "ACT's 2026 Treaty policy dropped the referendum from its Treaty Principles Bill.",
            "basis": null,
            "source": {
              "label": "Trust Democracy: Democracy Manifest — how each party is approaching democracy (17 Sep 2026)",
              "url": "https://trustdemocracy.nz/2026/09/democracy-manifest-how-each-party-is-approaching-democracy-this-election/",
              "type": "secondary"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour opposes a referendum on the Māori seats.",
            "basis": null,
            "source": {
              "label": "The Spinoff: Where political parties stand on Te Tiriti o Waitangi (25 Aug 2026)",
              "url": "https://thespinoff.co.nz/atea/25-08-2026/where-political-parties-stand-on-te-tiriti-o-waitangi",
              "type": "secondary"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens would entrench the seats, not put them to a referendum.",
            "basis": "Entrench the Māori electoral seats ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori opposes a referendum on Māori seats and wants constitutional transformation.",
            "basis": null,
            "source": {
              "label": "The Spinoff: Where political parties stand on Te Tiriti o Waitangi (25 Aug 2026)",
              "url": "https://thespinoff.co.nz/atea/25-08-2026/where-political-parties-stand-on-te-tiriti-o-waitangi",
              "type": "secondary"
            }
          },
          "top": {
            "stance": -2,
            "evidence": "TOP opposes the Treaty Principles Bill and favours citizens' assemblies over a referendum.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Te Tiriti o Waitangi — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/treaty",
              "type": "secondary"
            }
          }
        },
        "glossary": [
          "binding-referendum",
          "te-tiriti"
        ]
      },
      {
        "id": "t3",
        "text": "The Government should lower the voting age to 16 for general elections.",
        "plain": "16- and 17-year-olds would be able to vote in parliamentary elections.",
        "context": "Supporters say 16-year-olds can work, pay tax and should have a say in their future. Critics say 16-year-olds are not yet adults and that the current age is widely accepted.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would lower the voting age to 16.",
            "basis": "Expand voting rights in New Zealand",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori supports lowering the voting age to 16 and restoring voting rights for prisoners.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Government to wipe out population of Invercargill in 2026 election (2025)",
              "url": "https://www.maoriparty.org.nz/government_to_wipe_out_population_of_invercargill_in_2026_election",
              "type": "official"
            }
          },
          "labour": {
            "stance": 0,
            "evidence": "Labour supports votes at 16 for local body elections, but not general elections.",
            "basis": "Allow 16 and 17 year olds to vote at local body elections",
            "source": {
              "label": "'Make it 16 welcomes Labour's support for 16 and 17 olds voting at local elections', 1 October 2026 (accessed 02 October 2026)",
              "url": "https://www.scoop.co.nz/stories/PO2610/S00007/make-it-16-welcomes-labours-support-for-16-and-17-year-olds-voting-at-local-elections.htm",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "t4",
        "text": "The Government should cap political donations at $30,000 per donor.",
        "plain": "No individual or organisation could donate more than $30,000 to a party or candidate over an electoral cycle.",
        "context": "Supporters say donation caps reduce the influence of wealthy donors and strengthen trust in politics. Critics say caps can be circumvented and that parties need money to campaign.",
        "positions": {
          "top": {
            "stance": 2,
            "evidence": "TOP would cap political donations at $30,000 per donor.",
            "basis": "Cap political donations at $30,000 per donor",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would cap donations and regulate lobbying.",
            "basis": "Regulate lobbying and party donations",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "labour": {
            "stance": 0,
            "evidence": "Labour proposes stronger monitoring of political spending, but has not committed to a $30,000 cap.",
            "basis": null,
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "The Treaty Principles Bill, Māori electorates, co-governance and electoral rules are contested. The debate is whether to protect Treaty-based arrangements, reform them, or reduce them. A referendum on the Māori seats, the voting age and donation caps are also on the table."
  },
  {
    "id": "transport",
    "number": 10,
    "title": "Transport and infrastructure",
    "shortTitle": "Transport",
    "intro": "Roads, public transport, rail and infrastructure debt are major choices. Parties differ on motorways versus public transport, fares and borrowing.",
    "hotTopic": "National is building the next set of Roads of National Significance and has removed fuel tax increases until 2028. ACT would focus the National Land Transport Fund on roads only. Labour has a $20 weekly public transport fare cap and would restore some rail and bus routes. The Greens would build mass rapid transit and cap fares at $2 for adults. Te Pāti Māori supports free public transport for children and community service card holders. NZ First has a 10-point rail plan, including passenger rail to Hamilton and Northland. TOP would make public transport free and put 60% of future infrastructure spending into maintenance and renewal.",
    "debate": "Transport spending is a long-term commitment. Roads can move goods and cars but encourage sprawl; public transport can reduce congestion and emissions but needs density and ongoing subsidies. Borrowing can fund assets that last for decades, but it also commits future budgets.",
    "sources": [
      {
        "label": "NZ Transport Agency",
        "url": "https://www.nzta.govt.nz/"
      },
      {
        "label": "Treasury: Infrastructure",
        "url": "https://www.treasury.govt.nz/information-and-services/infrastructure"
      }
    ],
    "statements": [
      {
        "id": "tr1",
        "text": "The Government should build more motorways and roads, even if it means less money for public transport.",
        "plain": "More state highways and major roads would be built, with public transport getting a smaller share of the transport budget.",
        "context": "Supporters say roads are essential for freight, regional connections and economic growth. Critics say building more roads induces traffic and locks in car dependence, and that public transport is a better use of limited funds.",
        "positions": {
          "national": {
            "stance": 2,
            "evidence": "National is building the next set of Roads of National Significance.",
            "basis": "Complete construction on the next set of Roads of National Significance",
            "source": {
              "label": "'National’s Economic Plan backs Kiwis to get ahead', 28 September 2026 (accessed 30 September 2026)",
              "url": "https://web.archive.org/web/20260928051638/https://www.national.org.nz/news/260928-nicolawillis",
              "type": "official"
            }
          },
          "act": {
            "stance": 2,
            "evidence": "ACT would focus the National Land Transport Fund on road infrastructure only.",
            "basis": "Focus National Land Transport Fund on road infrastructure only",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 1,
            "evidence": "NZ First supports both roading and rail, with a 10-point rail plan.",
            "basis": null,
            "source": {
              "label": "NZ First: 10-point rail policy",
              "url": "https://www.nzfirst.nz/new_zealand_first_announces_ten_point_rail_policy",
              "type": "official"
            }
          },
          "labour": {
            "stance": -1,
            "evidence": "Labour prioritises public transport and has a $20 weekly fare cap; it still funds some roads.",
            "basis": null,
            "source": {
              "label": "Labour: $20 weekly fare cap",
              "url": "https://www.labour.org.nz/farecap",
              "type": "official"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens would build mass transit and better rail and bus links rather than more motorways.",
            "basis": null,
            "source": {
              "label": "Green Party: Transport policy",
              "url": "https://www.greens.org.nz/manifesto_2026_transport",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori wants to reduce dependence on fossil fuels and prioritise public transport.",
            "basis": "Reduce dependence on fossil fuels to protect sovereignty ",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "top": {
            "stance": -1,
            "evidence": "TOP would put 60% of future infrastructure spending into maintenance and renewal, not new motorways.",
            "basis": null,
            "source": {
              "label": "Opportunity: Intergenerational Infrastructure policy",
              "url": "https://www.opportunity.org.nz/intergenerational_infrastructure",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "tr2",
        "text": "The Government should make public transport free or very cheap (for example, $2 fares).",
        "plain": "Bus and train fares would be heavily subsidised, so travel costs little or nothing at the point of use.",
        "context": "Supporters say cheap public transport reduces congestion, emissions and the cost of living. Critics say it is expensive, benefits people who already have alternatives, and may not improve services.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would make public transport free for children and some groups, and cap adult fares at $2.",
            "basis": "Make public transport free for children and other specified people and cap fares at $2 for adults",
            "source": {
              "label": "'Green Party launches the transport plan to combat fossil fuel crisis', 4 October 2026 (accessed 05 October 2026)",
              "url": "https://www.greens.org.nz/green_party_launches_the_transport_plan_to_combat_fossil_fuel_crisis",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would make public transport free.",
            "basis": "Make public transport free",
            "source": {
              "label": "'Free Public Transport', undated (accessed 19 August 2026)",
              "url": "https://web.archive.org/web/20260819051847/https://www.opportunity.org.nz/free_public_transport",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports free public transport for children, students and community service card holders, with all fares free within five years.",
            "basis": "Reduce dependence on fossil fuels to protect sovereignty ",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour would cap public transport at $20 a week, not make it free.",
            "basis": "Introduce a $20 weekly fare cap on public transport",
            "source": {
              "label": "'Labour's $20 Public Transport Fare Cap', undated (accessed 11 August 2026)",
              "url": "https://web.archive.org/web/20260811025742/https://www.labour.org.nz/farecap",
              "type": "official"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "National prioritises roads and does not propose free or $2 public transport.",
            "basis": null,
            "source": {
              "label": "National: Our Plan — transport and roads",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would focus transport funding on roads, not public transport subsidies.",
            "basis": "Focus National Land Transport Fund on road infrastructure only",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -1,
            "evidence": "NZ First supports rail, but backs targeted relief over free public transport.",
            "basis": "Make the Te Huia contract permanent ",
            "source": {
              "label": "NZ First: Our Policy 2026 (official)",
              "url": "https://www.nzfirst.nz/policy",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "tr3",
        "text": "The Government should invest in intercity passenger rail, such as Auckland–Hamilton and Wellington–Palmerston North.",
        "plain": "More regional passenger trains would run between cities and towns, with government funding for services and infrastructure.",
        "context": "Supporters say rail can connect regions, reduce road congestion and cut emissions. Critics say intercity rail is expensive per passenger and that buses or roads may be more efficient.",
        "positions": {
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First would expand passenger rail to Hamilton and Northland and make Te Huia permanent.",
            "basis": "Expand passenger rail operations to Hamilton and Northland",
            "source": {
              "label": "'Ten-Point Rail Policy', undated (accessed 29 October 2026)",
              "url": "https://web.archive.org/web/20261028233057/https://www.nzfirst.nz/ten_point_rail_policy",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would create improved public transport services between regions.",
            "basis": "Create improved public transport services between regions",
            "source": {
              "label": "'Fast, frequent, affordable public transport for all of us', undated (accessed 05 October 2026)",
              "url": "https://www.greens.org.nz/connect_aotearoa",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour supports public transport and rail, with a $20 weekly fare cap.",
            "basis": null,
            "source": {
              "label": "Labour: $20 weekly fare cap",
              "url": "https://www.labour.org.nz/farecap",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports public transport and reducing fossil fuel dependence.",
            "basis": "Reduce dependence on fossil fuels to protect sovereignty ",
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "National prioritises Roads of National Significance over intercity passenger rail.",
            "basis": null,
            "source": {
              "label": "National: Our Plan — transport and roads",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would focus transport funding on roads only.",
            "basis": "Focus National Land Transport Fund on road infrastructure only",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "top": {
            "stance": 1,
            "evidence": "TOP's 30-year infrastructure plan includes maintenance and public transport.",
            "basis": null,
            "source": {
              "label": "Opportunity: Intergenerational Infrastructure policy",
              "url": "https://www.opportunity.org.nz/intergenerational_infrastructure",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "tr4",
        "text": "The Government should borrow more to fund infrastructure, even if it increases debt.",
        "plain": "The government would take on more debt to build roads, rail, water and other long-lived assets.",
        "context": "Supporters say borrowing for assets that last decades is sensible and that New Zealand has relatively low government debt. Critics say more debt leaves less room to respond to recessions and shifts costs to future taxpayers.",
        "positions": {
          "top": {
            "stance": 2,
            "evidence": "TOP would raise up to $60 billion to finance infrastructure.",
            "basis": "Raise up to $60b to finance infrastructure ",
            "source": {
              "label": "'Intergenerational Infrastructure' (PDF), undated (accessed 04 September 2026)",
              "url": "https://web.archive.org/web/20260904014758/https://cdn.opportunity.org.nz/documents/policy/Opportunity%20Policy%20-%20Intergenerational%20Infrastructure.pdf",
              "type": "official"
            }
          },
          "green": {
            "stance": 1,
            "evidence": "The Greens support borrowing for green infrastructure and public transport.",
            "basis": null,
            "source": {
              "label": "Green Party: Transport — easy, sustainable ways to get around",
              "url": "https://www.greens.org.nz/manifesto_2026_transport",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour would create a Future Fund to invest in infrastructure and businesses.",
            "basis": "Create a fund to invest in infrastructure and businesses",
            "source": {
              "label": "'New Zealand Future Fund', undated (accessed 11 August 2026)",
              "url": "https://web.archive.org/web/20260811030054/https://www.labour.org.nz/futurefund",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National would keep government debt below 40% of GDP.",
            "basis": "Keep government debt below 40 percent of GDP",
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would reduce new government spending and prioritise a smaller state.",
            "basis": "Reduce new government spending from $2.4 billion to $2 billion",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports investment in Māori energy sovereignty and infrastructure.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Policy 2026 (official)",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          }
        },
        "glossary": [
          "mmp",
          "sainte-lague",
          "overhang"
        ]
      }
    ],
    "blindedHotTopic": "Roads, public transport, rail and infrastructure debt are major choices. The debate is whether to build more motorways, invest in public transport and rail, make fares cheaper, or borrow more for infrastructure. Congestion and emissions are central."
  },
  {
    "id": "welfare",
    "number": 11,
    "title": "Welfare and inequality",
    "shortTitle": "Welfare",
    "intro": "Benefits, superannuation and the cost of living are central. Parties differ on benefit levels, sanctions, universal income and the age of eligibility for NZ Super.",
    "hotTopic": "The welfare debate is about adequacy and incentives. Labour would index benefits to inflation or wages and keep employment programmes. The Greens would increase benefits and remove sanctions. Te Pāti Māori wants whānau-centred support. TOP would replace much of the benefit system with a universal income of up to $370 a week, funded by a land value tax. National would reduce payments for long-term beneficiaries and tighten obligations. ACT wants stricter work requirements and a freeze on the minimum wage. NZ First wants a two-year lifetime limit on JobSeeker and higher in-work tax credits. On superannuation, ACT is the only party campaigning to raise the age to 67; Labour and NZ First oppose it.",
    "debate": "Welfare policy balances poverty reduction with work incentives and fiscal cost. Universal support is simple and reduces stigma but is expensive; targeted support costs less but can be harder to access. Sanctions can encourage work but can also push people deeper into hardship.",
    "sources": [
      {
        "label": "Ministry of Social Development",
        "url": "https://www.msd.govt.nz/"
      },
      {
        "label": "Treasury: Welfare analysis",
        "url": "https://www.treasury.govt.nz/"
      }
    ],
    "statements": [
      {
        "id": "w1",
        "text": "The Government should increase benefits so they keep up with the cost of living.",
        "plain": "Benefit rates would rise at least in line with inflation or wages, so recipients do not fall further behind.",
        "context": "Supporters say benefits are too low to cover basic costs and that poverty harms children and health. Critics say higher benefits can reduce work incentives and cost taxpayers more.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would index benefits and rent subsidies to the cost of living.",
            "basis": "Ensure benefits and rent subsidies keep up with the cost of living",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would increase benefit payments and improve standards for beneficiaries.",
            "basis": "Increase benefit payments and improve standards for beneficaries ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 2,
            "evidence": "Te Pāti Māori wants to invest in whānau and reduce poverty.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Policy — whānau and wellbeing",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "top": {
            "stance": 2,
            "evidence": "TOP would introduce a universal income, which would raise incomes for many.",
            "basis": "Introduce a universal income for citizens of up to $370 a week",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "National would reduce payments for long-term beneficiaries and tighten obligations.",
            "basis": "Reduce benefit payments for people receiving support for more than 2 years",
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT would tighten benefit eligibility and obligations.",
            "basis": "Restrict how many people recieve medical certification for health-related benefits",
            "source": {
              "label": "'ACT announces policy to make benefits a hand-up, not a way of life', 28 June 2026 (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260817231721/https://www.act.org.nz/news/act-announces-policy-to-make-benefits-a-hand-up-not-a-way-of-life",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 1,
            "evidence": "NZ First would increase in-work tax credits and the minimum wage, but also cap JobSeeker.",
            "basis": "Increase In-Work-Family-Tax-Credit by $70 a week",
            "source": {
              "label": "'NZ First to Increase Working for Families, Minimum Wage', 10 October 2026 (accessed 12 October 2026)",
              "url": "https://web.archive.org/web/20261011233947/https://www.nzfirst.nz/nz_first_to_increase_working_for_families_minimum_wage",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "w2",
        "text": "The Government should introduce a universal basic income or a guaranteed minimum income.",
        "plain": "Every adult would receive a regular payment from the government, regardless of whether they work.",
        "context": "Supporters say it reduces poverty, simplifies welfare and recognises unpaid work. Critics say it is very expensive and gives money to people who do not need it.",
        "positions": {
          "top": {
            "stance": 2,
            "evidence": "TOP would introduce a universal income for citizens of up to $370 a week.",
            "basis": "Introduce a universal income for citizens of up to $370 a week",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          },
          "green": {
            "stance": 1,
            "evidence": "The Greens support a guaranteed liveable income, but have not committed to a full UBI.",
            "basis": "Increase benefit payments and improve standards for beneficaries ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": 1,
            "evidence": "Te Pāti Māori supports a guaranteed income approach for whānau, but has not published a full UBI.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Policy — whānau and wellbeing",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour favours targeted support, not a universal basic income.",
            "basis": null,
            "source": {
              "label": "Labour: A Fair Go For Families",
              "url": "https://www.labour.org.nz/fair-go-for-families",
              "type": "official"
            }
          },
          "national": {
            "stance": -2,
            "evidence": "National's welfare policy is work-focused and does not propose a UBI.",
            "basis": null,
            "source": {
              "label": "National: A firm, fair and affordable welfare system",
              "url": "https://www.national.org.nz/policies/walfare",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT opposes unconditional welfare and wants work obligations.",
            "basis": null,
            "source": {
              "label": "ACT: Welfare as a hand up, not a way of life",
              "url": "https://www.act.org.nz/welfare",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First favours targeted in-work support, not a UBI.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Economy — welfare and employment",
              "url": "https://whichparty.nz/topics/economy",
              "type": "secondary"
            }
          }
        },
        "glossary": [
          "universal-basic-income"
        ]
      },
      {
        "id": "w3",
        "text": "The Government should impose a time limit on the unemployment benefit.",
        "plain": "People could only receive JobSeeker support for a fixed period, after which payments would stop or be reduced.",
        "context": "Supporters say time limits encourage people into work and prevent long-term dependency. Critics say they punish people who face barriers to work and can increase hardship and crime.",
        "positions": {
          "act": {
            "stance": 2,
            "evidence": "ACT supports strict work obligations and time-limited support.",
            "basis": "Monitor spending for jobseekers receiving a benefit for more than 4 months",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "national": {
            "stance": 1,
            "evidence": "National would reduce payments for long-term beneficiaries.",
            "basis": "Reduce benefit payments for people receiving support for more than 2 years",
            "source": {
              "label": "National: 2026 election policy index (official)",
              "url": "https://www.national.org.nz/policies",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": 2,
            "evidence": "NZ First proposes a two-year lifetime limit on JobSeeker WorkReady.",
            "basis": null,
            "source": {
              "label": "WhichParty NZ: Economy — where the parties stand (2026)",
              "url": "https://whichparty.nz/topics/economy",
              "type": "secondary"
            }
          },
          "labour": {
            "stance": -1,
            "evidence": "Labour opposes time limits on benefits but supports employment programmes.",
            "basis": null,
            "source": {
              "label": "Labour: A Fair Go For Families",
              "url": "https://www.labour.org.nz/fair-go-for-families",
              "type": "official"
            }
          },
          "green": {
            "stance": -2,
            "evidence": "The Greens oppose sanctions and want to increase benefits.",
            "basis": "Increase benefit payments and improve standards for beneficaries ",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -2,
            "evidence": "Te Pāti Māori opposes punitive welfare and sanctions.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Policy — whānau and wellbeing",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "top": {
            "stance": -2,
            "evidence": "TOP would replace the benefit system with a universal income and remove sanctions.",
            "basis": null,
            "source": {
              "label": "Opportunity: Tax Reset — universal income",
              "url": "https://www.opportunity.org.nz/tax-reset",
              "type": "official"
            }
          }
        }
      },
      {
        "id": "w4",
        "text": "The Government should raise the age of eligibility for New Zealand Superannuation to 67.",
        "plain": "People would have to wait until they are 67 to receive NZ Super, instead of 65.",
        "context": "Supporters say people are living longer and that the current age is unaffordable. Critics say many people cannot work until 67, especially in physically demanding jobs, and that the change would hit Māori and low-income workers hardest.",
        "positions": {
          "act": {
            "stance": 2,
            "evidence": "ACT would raise the retirement age to 67 by 2035.",
            "basis": "Raise the retirement age to 67 by 2035",
            "source": {
              "label": "ACT: Our Policies 2026 (official)",
              "url": "https://www.act.org.nz/policies",
              "type": "official"
            }
          },
          "labour": {
            "stance": -2,
            "evidence": "Labour opposes raising the age of eligibility for NZ Super.",
            "basis": null,
            "source": {
              "label": "Labour: Our Policies — retirement and KiwiSaver",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "nzfirst": {
            "stance": -2,
            "evidence": "NZ First would keep NZ Super for citizens and opposes raising the age.",
            "basis": null,
            "source": {
              "label": "NZ First: NZ Super for citizens only",
              "url": "https://www.nzfirst.nz/nzfirst_campaign_announcement_nz_super_for_citizens_only",
              "type": "official"
            }
          },
          "tpm": {
            "stance": -1,
            "evidence": "Te Pāti Māori focuses on earlier support for Māori, not raising the age.",
            "basis": null,
            "source": {
              "label": "Te Pāti Māori: Policy — mana motuhake",
              "url": "https://www.maoriparty.org.nz/policy",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National has no 2026 policy to raise the age of eligibility.",
            "basis": null,
            "source": {
              "label": "National: Our Plan — retirement",
              "url": "https://www.national.org.nz/plan",
              "type": "official"
            }
          },
          "green": {
            "stance": 0,
            "evidence": "The Greens focus on residency eligibility, not the age of eligibility.",
            "basis": null,
            "source": {
              "label": "Green Party: Seniors policy",
              "url": "https://www.greens.org.nz/manifesto_2026_seniors",
              "type": "official"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP proposes a universal income and retirement savings changes, not a higher super age.",
            "basis": null,
            "source": {
              "label": "Opportunity: Tax Reset — universal income and retirement",
              "url": "https://www.opportunity.org.nz/tax-reset",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "Benefits, superannuation and the cost of living are central. The debate is whether to increase benefits, impose work obligations, introduce a universal income, or raise the age of eligibility for NZ Super. Child poverty and work incentives are both at stake."
  },
  {
    "id": "ai",
    "number": 12,
    "title": "AI and technology",
    "shortTitle": "AI & tech",
    "intro": "AI is spreading through work, public services and politics. Parties differ on how to regulate it, how to power the data centres behind it, and how to protect people from its harms.",
    "hotTopic": "New Zealand has no overarching AI law. Labour and the Greens both propose an AI office, but the Greens go further with a dedicated AI plan, a one-year pause on new AI data centres, water and electricity limits, and rules on deepfakes. National focuses on AI adoption for small businesses and approving data centres only with more power generation. ACT's digital plan prioritises innovation and opposes blanket bans. Te Pāti Māori emphasises Māori data sovereignty. TOP focuses on copyright and online safety. The Deepfake Digital Harm and Exploitation Bill is before Parliament, and the Social Security (Modernisation) Amendment Bill has expanded automated decision-making in welfare.",
    "debate": "AI can improve productivity and public services, but it can also spread misinformation, entrench bias, consume large amounts of energy and water, and concentrate power in a few companies. Regulation can reduce harm but may slow innovation; doing nothing can leave the public exposed.",
    "sources": [
      {
        "label": "OECD: AI Principles",
        "url": "https://oecd.ai/en/ai-principles"
      },
      {
        "label": "NZ Privacy Commissioner",
        "url": "https://www.privacy.org.nz/"
      },
      {
        "label": "AI Forum NZ",
        "url": "https://aiforum.org.nz/"
      }
    ],
    "statements": [
      {
        "id": "ai1",
        "text": "The Government should require safety testing and transparency for advanced AI systems before they are deployed.",
        "plain": "Developers of powerful AI systems would have to test them for serious risks and publish information about how they work before releasing them to the public.",
        "context": "Supporters say testing and transparency reduce the risk of accidents, bias and misuse. Critics say heavy rules could slow innovation and favour large companies that can afford compliance.",
        "positions": {
          "labour": {
            "stance": 1,
            "evidence": "Labour would create an AI office to guide safe use, but has not promised pre-deployment safety testing.",
            "basis": "Create an office to help safely guide the use of AI",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens' AI plan includes an AI office, transparency and safe-use rules.",
            "basis": "Create an AI office and require transparent AI use",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National focuses on AI adoption for business, not safety testing.",
            "basis": "Support small businesses to adopt artificial intelligence",
            "source": {
              "label": "'Building the Future: National's 47-point plan to support small businesses' (PDF), undated (accessed 07 October 2026)",
              "url": "https://web.archive.org/web/20261007034501/https://assets.national.org.nz/web/prod/National%E2%80%99s%2047-point%20plan%20to%20support%20Small%20Businesses.pdf?v=1791324870",
              "type": "official"
            }
          },
          "act": {
            "stance": 0,
            "evidence": "ACT's digital plan focuses on innovation and reducing regulation; it has no AI safety testing commitment.",
            "basis": null,
            "source": {
              "label": "ACT: Unlocking New Zealand's Digital Economy (PDF)",
              "url": "https://web.archive.org/web/20260828031152/https://assets.nationbuilder.com/actnz/pages/36470/attachments/original/1787714690/Unlocking_New_Zealand%27s_Digital_Economy_FINAL.pdf?1787714690",
              "type": "official"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP's AI policy focuses on copyright, not safety testing.",
            "basis": "Back an AI framework on copyright protection",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        },
        "glossary": [
          "ai-safety-testing",
          "ai-office"
        ]
      },
      {
        "id": "ai2",
        "text": "The Government should pause new AI data centres until their energy and water use is assessed.",
        "plain": "No new large data centres would be approved for a period while officials assess how much electricity and water they use and what that means for the grid and local communities.",
        "context": "Supporters say data centres can strain electricity grids and water supplies and that New Zealand should not trade cheap power for a few jobs. Critics say a pause would deter investment and that the effects can be managed through conditions.",
        "positions": {
          "green": {
            "stance": 2,
            "evidence": "The Greens would impose a one-year pause on consenting new AI data centres.",
            "basis": "Implement a one-year pause on AI data centers",
            "source": {
              "label": "'Call for a One Year Pause on Consenting New AI Data Centres', 26 July 2026 (accessed 18 August 2026)",
              "url": "https://web.archive.org/web/20260818011123/https://www.greens.org.nz/call_for_one_year_pause_on_consenting_new_ai_data_centres",
              "type": "official"
            }
          },
          "labour": {
            "stance": 1,
            "evidence": "Labour would set rules for data centres around resource use, but has not promised a pause.",
            "basis": "Set rules for data centres around resource use",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "national": {
            "stance": -1,
            "evidence": "National would approve data centres only with more power generation, not pause them.",
            "basis": "Approve data centres only when they are accompanied by more power production",
            "source": {
              "label": "'Affordable Power Kiwis can rely on ', 2 October 2026 (accessed 02 October 2026)",
              "url": "https://web.archive.org/web/20261001233034/https://www.national.org.nz/news/261002-simeonbrown",
              "type": "official"
            }
          },
          "act": {
            "stance": -2,
            "evidence": "ACT's digital economy plan prioritises growth and opposes blanket bans.",
            "basis": null,
            "source": {
              "label": "ACT: Unlocking New Zealand's Digital Economy (PDF)",
              "url": "https://web.archive.org/web/20260828031152/https://assets.nationbuilder.com/actnz/pages/36470/attachments/original/1787714690/Unlocking_New_Zealand%27s_Digital_Economy_FINAL.pdf?1787714690",
              "type": "official"
            }
          }
        },
        "glossary": [
          "data-centre"
        ]
      },
      {
        "id": "ai3",
        "text": "The Government should require labels or watermarking for AI-generated political content during elections.",
        "plain": "Political ads and videos made or altered with AI would have to carry a clear label, so voters can tell them apart from real footage.",
        "context": "Supporters say deepfakes can swing elections and that labels help voters judge what is real. Critics say labels are easy to remove and that the rules could capture satire or ordinary political speech.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would tighten digital regulation, especially around deepfakes.",
            "basis": "Tighten digital regulation, especially around deepfakes, children and social media",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 2,
            "evidence": "The Greens would regulate AI to limit harm from scams and deepfakes.",
            "basis": "Regulate artificial intelligence to limit the harm from scams and deepfakes",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National's online policy focuses on social media age limits, not deepfake labelling.",
            "basis": "Ban under-16 year olds from social media",
            "source": {
              "label": "'Government moves to ban U16s from social media', undated (accessed 26 August 2026)",
              "url": "https://web.archive.org/web/20260826043303/https://www.national.org.nz/news/260824-christopherluxon",
              "type": "official"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT's digital policy prioritises free expression and innovation over new content rules.",
            "basis": null,
            "source": {
              "label": "ACT: Unlocking New Zealand's Digital Economy (PDF)",
              "url": "https://web.archive.org/web/20260828031152/https://assets.nationbuilder.com/actnz/pages/36470/attachments/original/1787714690/Unlocking_New_Zealand%27s_Digital_Economy_FINAL.pdf?1787714690",
              "type": "official"
            }
          },
          "top": {
            "stance": 0,
            "evidence": "TOP supports the online safety bill going to select committee, but has no specific deepfake labelling policy.",
            "basis": "Support the online safety bill on a potential under-16 social media ban to select committee",
            "source": {
              "label": "'Opportunity to support online safety bill to select committee', 25 August 2026 (accessed 28 August 2026)",
              "url": "https://web.archive.org/web/20260828093652/https://www.opportunity.org.nz/opportunity_to_support_online_safety_bill_to_select_committee",
              "type": "official"
            }
          }
        },
        "glossary": [
          "deepfake"
        ]
      },
      {
        "id": "ai4",
        "text": "The Government should fund retraining and income support for workers whose jobs are displaced by AI.",
        "plain": "People who lose work because of automation would get help to retrain, and temporary income support while they do.",
        "context": "Supporters say the people who lose jobs should not bear the cost of a technology shift they did not choose. Critics say it is hard to predict which jobs will go and that general economic growth and a strong safety net are better responses.",
        "positions": {
          "labour": {
            "stance": 2,
            "evidence": "Labour would create a workforce plan to ensure people benefit from AI.",
            "basis": "Create a workforce plan to ensure people benefit from AI",
            "source": {
              "label": "Labour: Our Policies 2026 (official)",
              "url": "https://www.labour.org.nz/our-policies/",
              "type": "official"
            }
          },
          "green": {
            "stance": 1,
            "evidence": "The Greens would protect workers' rights in AI use, but have not promised a specific retraining fund.",
            "basis": "Protect children and worker's rights in the use of AI",
            "source": {
              "label": "Green Party: Manifesto 2026 (official)",
              "url": "https://www.greens.org.nz/manifesto_2026",
              "type": "official"
            }
          },
          "national": {
            "stance": 0,
            "evidence": "National focuses on business AI adoption, not worker transition support.",
            "basis": "Support small businesses to adopt artificial intelligence",
            "source": {
              "label": "'Building the Future: National's 47-point plan to support small businesses' (PDF), undated (accessed 07 October 2026)",
              "url": "https://web.archive.org/web/20261007034501/https://assets.national.org.nz/web/prod/National%E2%80%99s%2047-point%20plan%20to%20support%20Small%20Businesses.pdf?v=1791324870",
              "type": "official"
            }
          },
          "act": {
            "stance": -1,
            "evidence": "ACT's digital plan focuses on innovation and reducing regulation, not worker transition payments.",
            "basis": null,
            "source": {
              "label": "ACT: Unlocking New Zealand's Digital Economy (PDF)",
              "url": "https://web.archive.org/web/20260828031152/https://assets.nationbuilder.com/actnz/pages/36470/attachments/original/1787714690/Unlocking_New_Zealand%27s_Digital_Economy_FINAL.pdf?1787714690",
              "type": "official"
            }
          },
          "top": {
            "stance": 1,
            "evidence": "TOP's universal income would support people through job transitions, but it is not AI-specific.",
            "basis": "Introduce a universal income for citizens of up to $370 a week",
            "source": {
              "label": "Opportunity: Policy 2026 (official)",
              "url": "https://www.opportunity.org.nz/policy",
              "type": "official"
            }
          }
        }
      }
    ],
    "blindedHotTopic": "AI is spreading through work, public services and politics. The debate is whether to regulate it for safety and transparency, pause energy-hungry data centres, label deepfakes, and support workers whose jobs change. The risks include bias, scams, misinformation and the concentration of power."
  }
];

export const META = {
  "version": "2026-11-05.1",
  "updated": "2026-11-05",
  "electionDate": "2026-11-07",
  "electionName": "2026 New Zealand general election",
  "totalStatements": 48,
  "totalSections": 12,
  "polling": {
    "date": "2026-11-02",
    "source": "election2026.nz polling average",
    "sourceUrl": "https://election2026.nz/",
    "note": "Recency-weighted average of published polls, 2 November 2026. Not a prediction.",
    "seats": {
      "national": 34,
      "labour": 34,
      "green": 18,
      "nzfirst": 12,
      "act": 12,
      "top": 8,
      "tpm": 5
    },
    "votes": {
      "national": 28.4,
      "labour": 28.4,
      "green": 14.5,
      "nzfirst": 10.1,
      "act": 9.7,
      "top": 6.3,
      "tpm": 1.6
    },
    "totalSeats": 123,
    "majority": 62,
    "blocs": {
      "left": [
        "labour",
        "green",
        "tpm"
      ],
      "right": [
        "national",
        "act",
        "nzfirst"
      ],
      "unaligned": [
        "top"
      ]
    }
  }
};

export const GLOSSARY = {
  "aukus": {
    "term": "AUKUS",
    "definition": "A security partnership between Australia, the United Kingdom and the United States. “Pillar 2” covers advanced military technology and cooperation beyond nuclear submarines. New Zealand is not a member; joining Pillar 2 would deepen defence and technology ties with those countries."
  },
  "mmp": {
    "term": "MMP",
    "definition": "Mixed-member proportional representation. You have two votes: a party vote and an electorate vote. The party vote decides each party’s share of seats; the electorate vote decides the local MP."
  },
  "sainte-lague": {
    "term": "Sainte-Laguë",
    "definition": "The formula New Zealand uses to share party-vote seats among parties that clear the 5% threshold or win an electorate seat."
  },
  "overhang": {
    "term": "Overhang",
    "definition": "When a party wins more electorate seats than its party vote entitles it to, Parliament can grow beyond the usual 120 seats."
  },
  "capital-gains-tax": {
    "term": "Capital gains tax",
    "definition": "A tax on the profit made when an asset, such as an investment property, is sold. The family home is usually exempt in the proposals discussed in this survey."
  },
  "wealth-tax": {
    "term": "Wealth tax",
    "definition": "An annual tax on a person’s net wealth above a threshold, such as assets over $10 million. It is different from a capital gains tax, which is paid when an asset is sold."
  },
  "land-value-tax": {
    "term": "Land value tax",
    "definition": "A tax on the value of land, usually excluding buildings. It is paid by the landowner, whether or not the land is developed."
  },
  "ets": {
    "term": "Emissions trading scheme (ETS)",
    "definition": "A cap-and-trade system that puts a price on greenhouse gas emissions. Businesses must hold units for the emissions they produce."
  },
  "agricultural-emissions": {
    "term": "Agricultural emissions pricing",
    "definition": "Putting a price on methane and nitrous oxide from farming, either through the ETS or a separate farm levy. It is contested because agriculture is New Zealand’s largest source of emissions."
  },
  "net-zero": {
    "term": "Net zero",
    "definition": "Balancing the greenhouse gases New Zealand emits with the gases it removes or offsets, so the net contribution is zero. New Zealand’s target is 2050."
  },
  "pharmac": {
    "term": "Pharmac",
    "definition": "The government agency that decides which medicines are publicly funded in New Zealand, and negotiates their prices."
  },
  "te-tiriti": {
    "term": "Te Tiriti o Waitangi",
    "definition": "The Treaty of Waitangi, signed in 1840. It is a founding document of New Zealand and shapes the relationship between the Crown and Māori. The Māori and English texts differ, and both are part of the constitutional framework."
  },
  "co-governance": {
    "term": "Co-governance",
    "definition": "Arrangements where the Crown and Māori share decision-making power over a resource, place or public service."
  },
  "entrench": {
    "term": "Entrench",
    "definition": "To protect a law by requiring a special majority, often 75% of Parliament, to change or repeal it. Entrenchment limits what a simple majority can do."
  },
  "binding-referendum": {
    "term": "Binding referendum",
    "definition": "A public vote whose result the government is committed to implement. A non-binding referendum is advisory."
  },
  "three-strikes": {
    "term": "Three Strikes",
    "definition": "A sentencing law that imposes the maximum sentence for a third serious violent or sexual offence, with limited exceptions. It reduces the judge’s discretion."
  },
  "charter-schools": {
    "term": "Charter schools",
    "definition": "Publicly funded schools run by independent sponsors, outside the normal state school rules. They are also called partnership schools."
  },
  "boot-camps": {
    "term": "Military-style boot camps",
    "definition": "Residential programmes for young offenders with military-style discipline, training and routine. They are also called military-style academies."
  },
  "data-centre": {
    "term": "Data centre",
    "definition": "A large building full of computers that stores and processes data. AI data centres use large amounts of electricity and water for cooling."
  },
  "deepfake": {
    "term": "Deepfake",
    "definition": "An image, video or audio recording created or altered with AI to show someone saying or doing something they did not. Deepfakes can be used for scams, abuse or political misinformation."
  },
  "ai-safety-testing": {
    "term": "AI safety testing",
    "definition": "Testing an AI system for serious risks, such as bias, misuse or dangerous capabilities, before it is released. It can be done by the developer, an independent auditor or a regulator."
  },
  "ai-office": {
    "term": "AI office",
    "definition": "A government body that would coordinate AI policy, regulation and advice across departments."
  },
  "universal-basic-income": {
    "term": "Universal basic income",
    "definition": "A regular cash payment to every adult, regardless of whether they work or how much they earn. It is different from targeted benefits."
  },
  "fast-track": {
    "term": "Fast-track approvals",
    "definition": "A consenting process that allows major projects to be approved faster, with fewer opportunities for public submissions and appeals. It is used for some infrastructure, housing, mining and energy projects."
  },
  "gang-patch-ban": {
    "term": "Gang patch ban",
    "definition": "A law banning the display of gang insignia in public places, backed by police powers to seize patches and disperse gang gatherings."
  }
};
