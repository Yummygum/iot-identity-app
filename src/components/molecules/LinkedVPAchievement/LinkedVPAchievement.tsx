import React from 'react'

import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import { TLinkedVP } from '@/lib/schemas/VerificationResultSchema'

interface ILinkedVPAchievementProps {
  linkedVPData: TLinkedVP
}

const LinkedVPAchievement = ({ linkedVPData }: ILinkedVPAchievementProps) => {
  const achievement = linkedVPData?.credentialSubject?.achievement

  return (
    <>
      <h3 className="mb-4 text-xl font-medium">Certifications</h3>

      <div>
        <Card className="relative flex flex-col gap-2 p-5">
          {achievement?.creator?.image?.id && (
            <div className="top-0 right-0 z-10 h-10 w-10 overflow-hidden rounded-full md:absolute md:translate-x-1/2 md:-translate-y-1/2">
              <img
                alt={`${achievement.creator.name} logo`}
                className="h-full w-auto"
                src={achievement.creator.image?.id}
              />
            </div>
          )}

          <div className="mb-4 flex justify-between">
            <h4 className="font-medium">{achievement?.name}</h4>

            {linkedVPData.issuanceDate && (
              <div className="flex items-center gap-2">
                <Icon name="sealCheck" />
                <span className="text-sm">
                  {new Date(linkedVPData.issuanceDate).toLocaleDateString(
                    'en-US',
                    {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    }
                  )}
                </span>
              </div>
            )}
          </div>

          {achievement?.description && (
            <div className="text-foreground/50 justify-between text-sm md:flex">
              <p>{achievement.description}</p>
            </div>
          )}
        </Card>
      </div>
    </>
  )
}

export default LinkedVPAchievement
