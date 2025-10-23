export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 0))

  const isValid = Math.random() < 0.5

  const errorCodes: { code: string; shouldShowCredential: boolean }[] = [
    {
      code: 'INVALID_SIGNATURE',
      shouldShowCredential: false
    },
    {
      code: 'EXPIRED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'REVOKED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'SUSPENDED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'NOT_VALID_YET',
      shouldShowCredential: true
    },
    {
      code: 'ORGANIZATION_CANT_BE_VERIFIED',
      shouldShowCredential: true
    },
    {
      code: 'SERVICE_UNAVAILABLE',
      shouldShowCredential: false
    }
  ]

  if (isValid) {
    return Response.json({
      verifier: {
        verifiedAt: new Date(),
        name: 'Verifier XYZ',
        url: 'https://example.com/verifier-xyz'
      },
      credential: {
        name: 'John Doe',
        issuer: {
          name: 'Amsterdam University of Applied Sciences',
          logoUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8RwvnbGaiWMpSJM7V5hPeftqJ4jj8_oiTw&s'
        },
        issuanceDate: new Date(),
        expiryDate: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        )
      },
      checks: [
        {
          name: 'Credential Validation',
          status: 'passed'
        },
        {
          name: 'Credential Status',
          status: 'passed'
        },
        {
          name: 'Trust relation',
          status: 'passed'
        },
        {
          name: 'Issuer Domain Linkage',
          status: 'passed'
        }
      ]
    })
  }

  const randomReason = errorCodes[Math.floor(Math.random() * errorCodes.length)]

  return Response.json({
    verifier: null,
    credential: randomReason.shouldShowCredential
      ? {
          name: 'John Doe',
          issuer: {
            name: 'Amsterdam University of Applied Sciences',
            logoUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8RwvnbGaiWMpSJM7V5hPeftqJ4jj8_oiTw&s'
          },
          issuanceDate: new Date(),
          expiryDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          )
        }
      : null,
    checks: [
      {
        name: 'Credential Validation',
        status: randomReason.shouldShowCredential ? 'passed' : 'failed',
        error: randomReason.code
      },
      {
        name: 'Credential Status',
        status: 'failed',
        error: randomReason.code
      },
      {
        name: 'Trust relation',
        status: 'failed',
        error: randomReason.code
      },
      {
        name: 'Issuer Domain Linkage',
        status: 'failed',
        error: randomReason.code
      }
    ]
  })
}
