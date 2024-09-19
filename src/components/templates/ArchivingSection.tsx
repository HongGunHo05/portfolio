import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {Section} from './IntroSection.style'
import {motion} from 'framer-motion'
import {useTheme} from '@emotion/react'
import IconPortfolio from '@public/static/images/portfolio-logo.png'
import IconGithub from '@public/static/logo/skills/github.png'
import IconVelog from '@public/static/logo/skills/velog.png'
import Image from 'next/image'
import SectionTitle from '@components/organisms/SectionTitle'
import {forwardRef, ForwardRefRenderFunction} from 'react'
import {SectionMethodsType} from 'pages'

// TODO: black 컬러 일부 gray.800 수정
type ArchivingSectionProps = {
    sectionMethods: SectionMethodsType
}

const ArchivingSection: ForwardRefRenderFunction<
    HTMLDivElement,
    ArchivingSectionProps
> = ({sectionMethods}, ref) => {
    const theme = useTheme()

    return (
        <Section
            ref={ref}
            css={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: '#212529',
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
                    title="ARCHIVING"
                    color={theme.colors.white}
                    onClickScrollClip={() => sectionMethods.scrollToSection(3)}
                />

                <motion.div
                    initial={{translateY: 0, opacity: 0}}
                    whileInView={{
                        translateY: -20,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.6,
                        x: {duration: 1},
                        default: {ease: 'linear'},
                    }}
                    viewport={{
                        once: true,
                    }}
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4rem',
                        marginTop: '3rem',
                    }}
                >
                    <div
                        css={{
                            display: 'flex',
                            gap: '4rem',
                            flexDirection: 'column',
                            '@media (min-width: 1200px)': {
                                flexDirection: 'row',
                            },
                        }}
                    >
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={() => window.open('https://github.com/lucas0530')}
                            css={{
                                backgroundColor: '#f5f5f5',
                                padding: '2rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                flex: 1,
                            }}
                        >
                            <div
                                css={{
                                    width: '12rem',
                                    marginLeft: '-0.25rem',
                                }}
                            >
                                <Image src={IconGithub}/>
                            </div>
                            <div
                                css={{
                                    marginTop: '1rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                <a
                                    css={{
                                        whiteSpace: 'nowrap',
                                    }}
                                    href="https://github.com/lucas0530"
                                >
                                    github.com/lucas0530
                                </a>
                            </div>

                            <div>
                                <Text
                                    css={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    소스 코드 저장소
                                </Text>
                                <Text>입니다.</Text>
                            </div>
                            <ul
                                css={{
                                    paddingLeft: '1rem',
                                    li: {
                                        marginBottom: '0.5rem',
                                    },
                                }}
                            >
                                <li>
                                    <Text>과거 프로젝트, 프로그램, 앱의 소스 코드</Text>
                                </li>
                                <li>
                                    <Text>멘토링 중인 Organizations의 소스 코드</Text>
                                </li>
                                <li>
                                    <Text>라이브러리 활동 내역 등</Text>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={() => window.open('https://velog.io/@lucas')}
                            css={{
                                backgroundColor: '#f5f5f5',
                                padding: '2rem',
                                borderRadius: '1rem',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                            }}
                        >
                            <div
                                css={{
                                    marginTop: '-1.5rem',
                                    marginBottom: '-2.5rem',
                                    marginLeft: '-3.5rem',
                                    width: '14rem',
                                }}
                            >
                                <Image src={IconVelog}/>
                            </div>
                            <div
                                css={{
                                    marginTop: '1rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                <a
                                    css={{
                                        whiteSpace: 'nowrap',
                                    }}
                                    href="https://velog.io/@lucas"
                                >
                                    velog.io/@lucas
                                </a>
                            </div>

                            <div>
                                <Text
                                    css={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    스터디 및 지식 공유 목적의 블로그
                                </Text>
                                <Text>입니다.</Text>
                            </div>
                            <ul
                                css={{
                                    paddingLeft: '1rem',
                                    li: {
                                        marginBottom: '0.5rem',
                                    },
                                }}
                            >
                                <li>
                                    <Text>공부한 내용을 머리로 정리하기 위해 작성한 기록</Text>
                                </li>
                                <li>
                                    <Text>한층 더 성장한 개발자가 되기 위한 몸부림</Text>
                                </li>
                                <li>
                                    <Text>알고 있는 지식을 공유하고 피드백을 받기 위한 자리</Text>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </Center>
        </Section>
    )
}

export default forwardRef(ArchivingSection)
