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
      id: 'https://acme.example.org/1a2b3c4d5e6f',
      type: ['VerifiableCredential'],
      credentialSubject: {
        id: 'random-id',
        certificaat: {
          type: 'ACMECorpCredential',
          certificeringsDatum: '2024-06-26',
          geldigheidsPeriode: '1 jaar',
          garanties: [
            'Het bedrijf is echt en bereikbaar.',
            'Voldoet aan de Thuiswinkel Algemene Voorwaarden.',
            '14 dagen bedenktijd.',
            'Veilige betaalmethoden.',
            'Duidelijke product/servicebeschrijvingen.',
            'Transparant bestelproces.',
            'Duidelijke prijzen.',
            'Veilige betaalomgeving.',
            'Veilige omgang met persoonlijke gegevens.',
            'Effectieve klachtenafhandeling en onafhankelijke geschillenbemiddeling.'
          ]
        },
        image:
          'https://static.wikia.nocookie.net/fictionalcompanies/images/c/c2/ACME_Corporation.png',
        name: 'ACME Corp'
      },
      issuer: {
        id: 'https://example.com/',
        name: 'EVC Nederland'
      },
      issuanceDate: '2025-11-12T12:23:13Z',
      expirationDate: '2035-12-31T23:59:59Z'
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
      payload: null
    },
    linked_vp: {
      status: 'Success',
      payload: null
    },
    domain_linkage: {
      status: 'Success',
      payload: null
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
