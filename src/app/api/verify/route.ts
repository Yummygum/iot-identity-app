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
      '@context': [
        'https://www.w3.org/ns/credentials/v2',
        'https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json'
      ],
      type: ['VerifiableCredential', 'OpenBadgeCredential'],
      name: 'HBO Bouwkunde - Civil Engineering',
      description:
        "Dit erkenningsprogramma is bedoeld voor mensen met ruime ervaring in de bouw en de daaraan gerelateerde sectoren en die hun kennis, inzicht en ervaring willen laten erkennen op officieel HBO-niveau. Het minimun is 3 jaar werkzaam in een positie op dit niveau en met de relevante werkervaring. Aanvullende (vak)diploma's of cursussen die aansluiten op HBO-niveau zijn een vereiste.",
      issuanceDate: '2024-10-28T10:00:00Z',
      issuer: 'did:web:evc-nederland.nl',
      credentialSubject: {
        type: 'AchievementSubject',
        id: 'did:example:student-12345',
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
        achievement: {
          id: 'urn:uuid:b12c5387-5567-493e-84e8-a6f84d8b82f2',
          type: 'Achievement',
          achievementType: 'Ervaringscertificaat HBO-niveau',
          name: 'HBO Bouwkunde - Civil Engineering',
          description:
            "Dit erkenningsprogramma is bedoeld voor mensen met ruime ervaring in de bouw en de daaraan gerelateerde sectoren en die hun kennis, inzicht en ervaring willen laten erkennen op officieel HBO-niveau. Het minimun is 3 jaar werkzaam in een positie op dit niveau en met de relevante werkervaring. Aanvullende (vak)diploma's of cursussen die aansluiten op HBO-niveau zijn een vereiste.",
          criteria: {
            id: 'https://evc-nederland.nl/evc-procedure/hbo-bachelor-bouwkunde/',
            narrative:
              "1. **Doe de Quickscan en krijg advies**\nOm een EVC-traject te starten, geven we graag vooraf advies & uitleg. Vul daarom eerst de Quickscan in. Een adviseur benadert je voor een telefonisch adviesgesprek. De uitslag ontvang je per e-mail.\n2. **Schrijf je in**\nJe kunt direct starten met de EVC-procedure. Gebruik hiervoor het inschrijfformulier. Binnen 2 dagen ontvang je per e-mail een bevestiging van je inschrijving, met inlogcodes voor de digitale EVC-tool.\n3. **Maak je portfolio**\nWanneer je toegang hebt tot de EVC-tool start je met de opbouw van je portfolio. Dit portfolio bestaat uit voorbeelden van je ervaring en relevante bewijsstukken. Hierbij kun je denken aan diploma's, functiebeschrijvingen, beoordelingen, certificaten, plannen, rapportages, foto's, logboeken etc. Alle bewijsstukken die je toevoegt moeten authentiek en geanonimiseerd zijn. Bij het invullen van de EVC-tool word je geholpen door een portfoliobegeleider, een expert binnen je vakgebied. Daarnaast bieden we groepsgewijze portfoliobijeenkomsten aan.\n4. **Doorloop het assessment**\nIs je portfolio compleet? Dan volgt een assessment. Dit is een interview van totaal anderhalf uur. Tijdens dit interview wordt je portfolio besproken en beoordeeld door de EVC-beoordelaar (assessor).\n5. **Ontvang je Ervaringscertificaat**\nNa het assessment schrijft de assessor een rapportage, deze vormt het officieel erkende HBO-Ervaringscertificaat. In het rapport staat een beschrijving van jouw behaalde competenties. Je hebt nu officieel je HBO-niveau aangetoond! Je ontvangt het certificaat digitaal binnen 4 weken na je assessment. Dit wordt opgenomen in het register voor Ervaringscertificaten."
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
              id: 'https://media.licdn.com/dms/image/v2/D4E0BAQGsFiSGHpnqtQ/company-logo_200_200/company-logo_200_200/0/1704200938642/evc_nederland_logo?e=2147483647&v=beta&t=GwJ7Dsq_XAR4GfAZiPa5LbvxN0cMT7uInnOgxhezTsY',
              type: 'Image'
            }
          }
        }
      }
    },
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
      payload: {
        name: 'ExamenKamer',
        domain: 'https://www.examenkamer.nl/',
        image: 'https://www.examenkamer.nl/inhoud/uploads/Logo-full-color.svg'
      }
    },
    linked_vp: {
      status: 'Success',
      payload: {
        Placeholder: 'Another full credential much like the above'
      }
    },
    domain_linkage: {
      status: 'Success',
      payload: 'https://evc-nederland.nl/'
    }
  }
]

export async function POST() {
  // Optional: simulating a delay for testing purposes,
  await new Promise((resolve) => setTimeout(resolve, 0))

  const randomIndex = Math.floor(Math.random() * exampleResponses.length)
  const exampleResponse = exampleResponses[randomIndex]

  return Response.json(exampleResponse)
}
