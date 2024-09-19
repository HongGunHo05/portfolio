import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {useTheme} from '@emotion/react'
import {motion, useScroll, useTransform} from 'framer-motion'
import {SectionMethodsType} from 'pages'
import {forwardRef, ForwardRefRenderFunction, useEffect, useRef} from 'react'
import {Section} from './IntroSection.style'

export const INTRO_SECTION_PAGE_HEIGHT = 4000
const MOTION_OFFSET = {
    WELCOME_CONTAINER_SCALE: [0, 900],
    WELCOME_MAIN_TITLE_OPACITY: [700, 900],
    WELCOME_SUB_TITLE_OPACITY: [500, 700],
    BIO_MAIN_TITLE_OPACITY: [1000, 2400],
    BIO_SUB_TITLE_OPACITY: [1400, 2400],
    BIO_MAIN_TITLE_TRANSLATE_Y: [1000, 1400],
    BIO_CONTAINER_HOLDUP_Y: 3400,
    READ_MORE_BUTTON_OPACITY: [2800, 3000],
    READ_MORE_BUTTON_TRANSLATE_Y: [2800, 3000],
}

const WelcomeFixedMotion = () => {
    const {scrollY} = useScroll()
    const theme = useTheme()

    /** container motion styles */
    const containerScale = useTransform(
        scrollY,
        MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
        [1, 1.2]
    )

    /** main title motion styles */
    const mainTitleOpacity = useTransform(
        scrollY,
        MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
        [1, 0]
    )

    /** sub title motion styles */
    const subTitleOpacity = useTransform(
        scrollY,
        MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
        [1, 0]
    )

    /** scrollNav motion styles */
    const scrollNavOpacity = useTransform(scrollY, (value) =>
        value > MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y ? 0 : 1
    )

    return (
        <Center type="fixed">
            <Center
                css={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                }}
            >
                <motion.div
                    css={{
                        position: 'absolute',
                        top: 150,
                        margin: '1rem',
                    }}
                    initial={{translateY: 0}}
                    whileInView={{
                        translateY: '10px',
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 1,
                        repeatDelay: 1,
                    }}
                    style={{opacity: scrollNavOpacity}}
                >
                    <Text
                        css={{
                            color: theme.colors.white,
                        }}
                    >
                        ↓ 스크롤하여 진행해주세요!
                    </Text>
                </motion.div>
                <motion.div style={{scale: containerScale}}>
                    <motion.div
                        style={{opacity: mainTitleOpacity}}
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            css={{
                                color: theme.colors.white,
                                textAlign: 'center',
                                fontSize: '4rem',
                                '@media (min-width: 768px)': {
                                    fontSize: '8rem',
                                },
                            }}
                        >
                            안녕하세요!
                        </Text>
                    </motion.div>

                    <motion.div
                        style={{opacity: subTitleOpacity}}
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            css={{
                                color: theme.colors.white,
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                '@media (min-width: 768px)': {
                                    fontSize: '2.5rem',
                                },
                            }}
                        >
                            FE개발자 홍건호입니다
                        </Text>
                    </motion.div>
                </motion.div>
            </Center>
        </Center>
    )
}

type BioFixedMotionProps = {
    sectionMethods: SectionMethodsType
}
const BioFixedMotion = ({sectionMethods}: BioFixedMotionProps) => {
    const {scrollY} = useScroll()
    const theme = useTheme()
    const innerHeight = useRef(0)

    /** container motion styles */
    const containerTranslateY = useTransform(scrollY, (value) => {
        const correctionOffset = innerHeight.current / 2 - 350

        return value > MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y - correctionOffset
            ? MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y - value - correctionOffset
            : 0
    })

    useEffect(() => {
        innerHeight.current = window.innerHeight

        window.addEventListener('resize', () => {
            innerHeight.current = window.innerHeight
            window.scrollBy(0, 0)
        })
    }, [containerTranslateY])

    /** main title motion styles */
    const mainTitleOpacity = useTransform(
        scrollY,
        MOTION_OFFSET.BIO_MAIN_TITLE_OPACITY,
        [0, 1]
    )
    const mainTitleTranslateY = useTransform(
        scrollY,
        MOTION_OFFSET.BIO_MAIN_TITLE_TRANSLATE_Y,
        [0, -10]
    )

    /** sub title motion styles */
    const subTitleOpacity = useTransform(
        scrollY,
        MOTION_OFFSET.BIO_SUB_TITLE_OPACITY,
        [0, 1]
    )

    /** button motion styles */
    const buttonOpacity = useTransform(
        scrollY,
        MOTION_OFFSET.READ_MORE_BUTTON_OPACITY,
        [0, 1]
    )

    const buttonTranslateY = useTransform(
        scrollY,
        MOTION_OFFSET.READ_MORE_BUTTON_TRANSLATE_Y,
        [0, -10]
    )

    const buttonPointerEvent = useTransform(scrollY, (value) =>
        value > MOTION_OFFSET.READ_MORE_BUTTON_OPACITY[0] ? 'auto' : 'none'
    )

    return (
        <Center type="fixed">
            <Center
                css={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                }}
            >
                <motion.div
                    style={{
                        translateY: containerTranslateY,
                    }}
                >
                    <motion.div
                        style={{
                            opacity: mainTitleOpacity,
                            translateY: mainTitleTranslateY,
                        }}
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        layout="position"
                    >
                        <Text
                            css={{
                                color: theme.colors.white,
                                fontSize: '3rem',
                                textAlign: 'center',
                                '@media (min-width: 768px)': {
                                    fontSize: '4rem',
                                },
                            }}
                        >
                            FE개발자 최근원
                        </Text>
                    </motion.div>

                    <motion.div
                        style={{opacity: subTitleOpacity}}
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            css={{
                                color: theme.colors.white,
                                textAlign: 'center',
                                fontSize: '1.125rem',
                                whiteSpace: 'break-spaces',
                                '@media (min-width: 768px)': {
                                    fontSize: '2rem',
                                },
                            }}
                        >
                            {
                                '기본에 충실해지고 싶은 4년차 개발자입니다.\n프론트 전반에 걸쳐 지식에 대한 열망이 아주 강합니다.'
                            }
                        </Text>
                    </motion.div>

                    <motion.div
                        style={{
                            opacity: buttonOpacity,
                            translateY: buttonTranslateY,
                            pointerEvents: buttonPointerEvent,
                        }}
                        css={{
                            marginBottom: '-4rem',
                            marginTop: '4rem',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <button
                            css={{
                                borderColor: theme.colors.white,
                                borderWidth: 2,
                                borderStyle: 'solid',
                                borderRadius: '980px',
                                backgroundColor: 'black',
                                height: '52px',
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                                cursor: 'pointer',
                                ':hover': {
                                    backgroundColor: theme.colors.white,
                                    transition: 'background-color 350ms ease-in-out',
                                    span: {
                                        transition: 'color 350ms ease-in-out',
                                        color: 'black',
                                    },
                                },
                            }}
                            onClick={() => sectionMethods.scrollToSection(1)}
                        >
              <span
                  css={{
                      color: theme.colors.white,
                      fontSize: '1rem',
                  }}
              >
                저를 조금 더 알아보고 싶나요?
              </span>
                        </button>
                    </motion.div>
                </motion.div>
            </Center>
        </Center>
    )
}

type IntroSectionProps = {
    sectionMethods: SectionMethodsType
}
const IntroSection: ForwardRefRenderFunction<
    HTMLDivElement,
    IntroSectionProps
> = ({sectionMethods}, ref) => {
    const theme = useTheme()

    return (
        <Section
            ref={ref}
            css={{
                backgroundColor: theme.colors.black,
                height: INTRO_SECTION_PAGE_HEIGHT,
                position: 'relative',
            }}
        >
            <WelcomeFixedMotion/>
            <BioFixedMotion sectionMethods={sectionMethods}/>
        </Section>
    )
}

export default forwardRef(IntroSection)
