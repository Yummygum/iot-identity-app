const exampleResponses = [
  {
    credential: null,
    proof: {
      status: 'Success',
      payload: null
    },
    status: {
      status: 'Success',
      payload: null
    },
    trust_relation: {
      status: 'Success',
      payload: null
    },
    linked_vp: {
      status: 'Success',
      payload: null
    },
    domain_linkage: {
      status: 'Unknown',
      payload: 'Could not fetch domain linkage did-configuration file'
    }
  },
  {
    credential: {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential'],
      credentialSubject: {
        id: 'did:jwk:eyJhbGciOiJFUzI1NiIsImNydiI6IlAtMjU2Iiwia2lkIjoiLWgzZzJGblhxeGxCTzJnYVpzOVE1RG5PVFgzSWJxSEpYSFYxNWdMemZLOCIsImt0eSI6IkVDIiwieCI6InNUYmI4MWJiYnUzY1lGS2hZeUZlTWlzRHJsT1h2WDZjbEtxU0RBcjVQZE0iLCJ5IjoiMjJCUklRNVNVaHFVVGdFdDBLc2kydHhWTmJBbDZoMnF5dzZ5bHloZE5FVSJ9',
        achievement: {
          id: 'Placeholder:id',
          type: 'Achievement',
          achievementType: 'Ervaringscertificaat HBO-niveau',
          name: 'HBO Bouwkunde - Civil Engineering',
          description:
            "Dit erkenningsprogramma is bedoeld voor mensen met ruime ervaring in de bouw en de daaraan gerelateerde sectoren en die hun kennis, inzicht en ervaring willen laten erkennen op officieel HBO-niveau. Het minimun is 3 jaar werkzaam in een positie op dit niveau en met de relevante werkervaring. Aanvullende (vak)diploma's of cursussen die aansluiten op HBO-niveau zijn een vereiste.",
          criteria: {
            id: 'https://evc-nederland.nl/evc-procedure/hbo-bachelor-bouwkunde/',
            narrative:
              "1. **Doe de Quickscan en krijg advies**\\nOm een EVC-traject te starten, geven we graag vooraf advies & uitleg. Vul daarom eerst de Quickscan in. Een adviseur benadert je voor een telefonisch adviesgesprek. De uitslag ontvang je per e-mail.\\n\\n2. **Schrijf je in**\\nJe kunt direct starten met de EVC-procedure. Gebruik hiervoor het inschrijfformulier. Binnen 2 dagen ontvang je per e-mail een bevestiging van je inschrijving, met inlogcodes voor de digitale EVC-tool.\\n\\n3. **Maak je portfolio**\\nWanneer je toegang hebt tot de EVC-tool start je met de opbouw van je portfolio. Dit portfolio bestaat uit voorbeelden van je ervaring en relevante bewijsstukken. Hierbij kun je denken aan diploma's, functiebeschrijvingen, beoordelingen, certificaten, plannen, rapportages, foto's, logboeken etc. Alle bewijsstukken die je toevoegt moeten authentiek en geanonimiseerd zijn. Bij het invullen van de EVC-tool word je geholpen door een portfoliobegeleider, een expert binnen je vakgebied. Daarnaast bieden we groepsgewijze portfoliobijeenkomsten aan.\\n\\n4. **Doorloop het assessment**\\nIs je portfolio compleet? Dan volgt een assessment. Dit is een interview van totaal anderhalf uur. Tijdens dit interview wordt je portfolio besproken en beoordeeld door de EVC-beoordelaar (assessor).\\n\\n5. **Ontvang je Ervaringscertificaat**\\nNa het assessment schrijft de assessor een rapportage, deze vormt het officieel erkende HBO-Ervaringscertificaat. In het rapport staat een beschrijving van jouw behaalde competenties. Je hebt nu officieel je HBO-niveau aangetoond! Je ontvangt het certificaat digitaal binnen 4 weken na je assessment. Dit wordt opgenomen in het register voor Ervaringscertificaten."
          },
          creator: {
            id: 'https://evc-nederland.nl/',
            type: ['Profile'],
            name: 'EVC Nederland',
            phone: '+31 35 – 7506 195',
            email: 'info@evc-nederland.nl',
            description:
              'Bij EVC Nederland geloven we dat mensen meer waard zijn dan alleen een diploma. Veel talent blijft onbenut doordat ervaring en skills niet zichtbaar of erkend zijn. Wij brengen jouw vaardigheden en competenties in kaart en valideren deze via een EVC-traject of Skillspaspoort. Zo helpen we individuen en organisaties om doelen te bereiken en talent optimaal te benutten. Als erkende EVC-aanbieder minimaliseren we de mismatch op de arbeidsmarkt en bieden we de snelste route naar ontwikkeling.',
            image: {
              id: 'https://storage.googleapis.com/public-logo-assets-f9d25b6/evc-nederland.png',
              type: 'Image'
            }
          }
        },
        identifier: [
          {
            type: 'IdentityObject',
            hashed: false,
            identityType: 'name',
            identityHash: 'Emma Smit'
          },
          {
            type: 'IdentityObject',
            hashed: false,
            identityType: 'ext:dateofBirth',
            identityHash: '1992-11-14'
          }
        ],
        type: 'AchievementSubject'
      },
      issuer: 'did:web:localhost%3A3034',
      issuanceDate: '2025-11-13T16:37:46Z',
      credentialStatus: {
        id: 'http://localhost:3034/ietf-oauth-token-status-list/0',
        type: 'statuslist+jwt',
        idx: 1490,
        uri: 'http://localhost:3034/ietf-oauth-token-status-list/0'
      }
    },
    proof: {
      status: 'Success',
      payload: null,
      data: null
    },
    status: {
      status: 'Success',
      payload: null,
      data: null
    },
    trust_relation: {
      status: 'Success',
      payload: null,
      data: null
    },
    linked_vp: {
      status: 'Success',
      payload: null,
      data: {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential'],
        credentialSubject: {
          id: 'did:web:localhost%3A3034',
          achievement: {
            id: 'Placeholder:id',
            type: 'Achievement',
            achievementType: 'Certificaat',
            name: 'Kwaliteits Keurmerk',
            description:
              'De kwaliteit van elke toetslocatie borgen, dat is het streven van de Examenkamer. Daarom hebben wij een certificering voor toetslocaties in het leven geroepen. Niet alleen voor onafhankelijke toetslocaties en bracheorganisaties, maar ook voor individuele exameninstellingen. Om een locatie te certificeren lopen we het certificeringsproces door aan de hand van de hoogst gestelde kwaliteitseisen.',
            criteria: {
              id: 'https://www.examenkamer.nl/certificering-toetslocaties/'
            },
            creator: {
              id: 'https://examenkamer.nl/',
              type: ['Profile'],
              name: 'ExamenKamer',
              phone: '+31 55 - 5225433',
              email: 'info@examenkamer.nl',
              description:
                'De kwaliteit van examinering waarborgen. Dat is sinds 1996 de missie van de Examenkamer. De Examenkamer is dé onafhankelijke toezichthouder in het private stelsel. Inmiddels hebben miljoenen examenkandidaten een examen afgelegd bij exameninstellingen die onder ons toezicht staan.',
              image: {
                id: 'https://storage.googleapis.com/public-logo-assets-f9d25b6/examenkamer.png',
                type: 'Image'
              }
            }
          },
          identifier: [
            {
              type: 'IdentityObject',
              hashed: false,
              identityType: 'name',
              identityHash: 'EVC Nederland'
            },
            {
              type: 'IdentityObject',
              hashed: false,
              identityType: 'emailAddress',
              identityHash: 'info@evc-nederland.nl'
            },
            {
              type: 'IdentityObject',
              hashed: false,
              identityType: 'ext:phone',
              identityHash: '+31 35 – 7506 195'
            }
          ],
          type: 'AchievementSubject'
        },
        issuer: 'did:web:localhost%3A3034',
        issuanceDate: '2025-11-13T16:37:08Z',
        credentialStatus: {
          id: 'http://localhost:3034/ietf-oauth-token-status-list/0',
          type: 'statuslist+jwt',
          idx: 980,
          uri: 'http://localhost:3034/ietf-oauth-token-status-list/0'
        }
      }
    },
    domain_linkage: {
      status: 'Success',
      payload: 'https://localhost:3034/',
      data: null
    }
  }
]

export async function GET() {
  // Optional: simulating a delay for testing purposes,
  await new Promise((resolve) => setTimeout(resolve, 0))

  const randomIndex = Math.floor(Math.random() * exampleResponses.length)
  const exampleResponse = exampleResponses[randomIndex]

  return Response.json(exampleResponse)
}
