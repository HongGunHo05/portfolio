import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import { SectionMethodsType } from 'pages'

const ABOUT_ME_FIELD = [
  { title: '이름', fields: ['홍건호'] },
  { title: '생년월일', fields: ['1998.05.27'] },
  { title: '연락처', fields: ['010-3156-6304', 'booklike112@naver.com'] },
]

type AboutMeSectionProps = {
  sectionMethods: SectionMethodsType
}

const AboutMeSection: ForwardRefRenderFunction<
  HTMLDivElement,
  AboutMeSectionProps
> = ({ sectionMethods }, ref) => {
  const theme = useTheme()

  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: theme.colors.white,
        padding: '6rem 2rem',
      }}
    >
      <Center
        css={{
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <SectionTitle
          title="ABOUT ME"
          onClickScrollClip={() => sectionMethods.scrollToSection(1)}
        />

        <motion.div
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          viewport={{
            once: true,
          }}
          css={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            marginTop: '4rem',
            gap: '3rem',
            flexDirection: 'column',
            '@media (min-width: 800px)': {
              flexDirection: 'row',
            },
          }}
        >
          {ABOUT_ME_FIELD.map(({ fields, title }) => (
            <div
              key={title}
              css={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                flex: 1,
              }}
            >
              <Text
                css={{
                  fontSize: '2rem',
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                }}
              >
                {title}
              </Text>
              {fields.map((field) => (
                <Text
                  key={field}
                  css={{
                    fontSize: '1.25rem',
                  }}
                >
                  {field}
                </Text>
              ))}
            </div>
          ))}
        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(AboutMeSection)
