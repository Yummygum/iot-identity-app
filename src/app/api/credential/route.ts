export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 0))

  const randomColors: { primary: string; secondary?: string }[] = [
    { primary: '#00C785' },
    { primary: '#0079C7', secondary: '#EBA630' },
    { primary: '#C76A00' }
  ]

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)]

  return Response.json({
    credential: {
      issuedTo: 'Jane Doe',
      dateOfBirth: new Date('2001-08-13'),
      type: "Bachelor's Degree",
      name: 'HBO Bouwkunde - Civil Engineering',
      issuer: {
        name: 'EVC Nederland',
        url: 'https://evc-nederland.nl/',
        logoUrl:
          'https://media.licdn.com/dms/image/v2/D4E0BAQGsFiSGHpnqtQ/company-logo_200_200/company-logo_200_200/0/1704200938642/evc_nederland_logo?e=2147483647&v=beta&t=GwJ7Dsq_XAR4GfAZiPa5LbvxN0cMT7uInnOgxhezTsY',
        colors: {
          primary: randomColor.primary,
          secondary: randomColor.secondary
        },
        description: `At EVC Nederland, we believe people are worth more than just a diploma. A lot of talent goes untapped because experience and skills are not visible or formally recognized. We map out and validate your abilities and competencies through an EVC program or Skills Passport.`,
        certifications: [
          {
            name: 'ISO 27001 Certified',
            url: 'https://www.iso.org/',
            description: 'International Organization for Standardization',
            expiresAt: new Date('2026-10-07')
          },
          {
            name: 'ISO 27001 Certified',
            url: 'https://www.iso.org/',
            description: 'International Organization for Standardization',
            expiresAt: new Date('2026-10-07')
          },
          {
            name: 'ISO 27001 Certified',
            url: 'https://www.iso.org/',
            description: 'International Organization for Standardization',
            expiresAt: new Date('2026-10-07')
          }
        ],
        trustEcosystems: [
          {
            name: 'Dutch Organizations for Universities',
            owner: 'International Organization for Standardization',
            membersAmount: 24
          },
          {
            name: 'Dutch Organizations for Universities',
            owner: 'International Organization for Standardization',
            membersAmount: 24
          }
        ]
      },
      issuanceDate: new Date(),
      expiryDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ),
      description: `A bachelor in Bouwkunde (Architecture / Building Engineering) combines creativity and technical expertise to design and realize the built environment. Students learn to translate spatial and structural concepts into functional, sustainable, and aesthetically pleasing designs. 
        
The program covers architecture, construction technology, materials, and urban planning, preparing graduates to collaborate with engineers, designers, and contractors on projects that shape the cities of tomorrow.`,
      verifier: {
        verifiedAt: new Date(),
        name: 'Examenkamer',
        url: 'https://example.com/verifier-xyz',
        logoUrl: 'https://www.examenkamer.nl/inhoud/uploads/Logo-full-color.svg'
      }
    }
  })
}
