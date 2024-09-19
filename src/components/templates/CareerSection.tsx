import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {Section} from './IntroSection.style'
import {motion} from 'framer-motion'

import Image from 'next/image'
import Divider from '@components/atoms/Divider'
import {forwardRef, ForwardRefRenderFunction, ReactElement} from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import {SectionMethodsType} from 'pages'

type CareerItemType = {
    company: {
        title: string
        period: string[]
        bio: string | ReactElement
        imageComponent: ReactElement
        subbio: string | ReactElement
    }
    projectList: {
        title: string
        period: string[]
        description: (string | ReactElement)[]
    }[]
}

const CareerList: CareerItemType[] = [
    {
        company: {
            title: '(주) 더코퍼레이션 (아하)',
            imageComponent: (
                <div
                    css={{
                        backgroundColor: 'white',
                        borderRadius: '100%',
                        width: '250px',
                        height: '250px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ccc',
                    }}
                >
                    <div
                        css={{
                            position: 'absolute',
                            width: '10rem',
                        }}
                    >
                        {/*<Image src={IconAha}/>*/}
                    </div>
                </div>
            ),
            period: ['2021.07', '2022.12'],
            bio: (
                <>
                    (주) 더코퍼레이션은{' '}
                    <Text bold>아하 서비스를 개발 공급하고 있는 회사</Text>
                    이며, 아하는 궁금한 점을 질문하면 검증된 전문가로 부터 답변을 받을 수
                    있는 보상형 Q&A 서비스입니다.{'\n'}다양한 분야에 신뢰성과 전문성이
                    높은 지식DB 보유를 통한 높은 검색 유입량으로{' '}
                    <Text bold>
                        400만 이상의 월간활성사용자수(MAU)와 2,500만 이상의 월 평균 페이지
                        수(PV)를 보유
                    </Text>
                    하고 있습니다.
                </>
            ),
            subbio: (
                <>
                    기본적으로는 프론트엔드 포지션으로 아하 서비스의 신규 개발을 맡았으며,
                    <Text bold>
                        스타트업 기업답게 중요도가 매우 높은 코어한 기능의 개발을 맡아 담당
                        및 진행
                    </Text>
                    했습니다.
                </>
            ),
        },
        projectList: [
            {
                title: '아하 앱 개발 (React)',
                period: ['2021.11', '2022.07'],
                description: [
                    '일일 평균적으로 모바일 기기를 통해 접속하는 사용자가 전체 중 60 퍼센트로, 앱에 대한 니즈를 해결하기 위해 앱 개발을 진행함',
                    <>
                        React-Native를 사용한 네이티브 개발 특성 상, 최적의 성능을 기대하기
                        위해{' '}
                        <Text bold>
                            컴포넌트 아키텍쳐 설계 및 React 라이브러리 이해도를 바탕으로 한
                            성능 개선 작업 진행
                        </Text>
                    </>,
                    <>
                        앱 출시 후 <Text bold>양대 마켓 무료 인기앱 2위 달성</Text>
                        했으며, 대대적인 마케팅으로 인한 고객 확보로 현재 진행 중임
                    </>,
                ],
            },
        ],
    }
]

type CareerContentProps = {
    career: CareerItemType
}

const CareerContent = ({career}: CareerContentProps) => (
    <motion.div
        css={{
            display: 'flex',
            width: '100%',
            maxWidth: '71.25rem',
            gap: '4rem',
            flexDirection: 'column',
            '@media (min-width: 800px)': {
                flexDirection: 'row',
            },
        }}
    >
        <div
            css={{
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                paddingBottom: '4rem',
                display: 'flex',
                justifyContent: 'center',

                '@media (min-width: 800px)': {
                    borderRightColor: '#ccc',
                    borderRightWidth: 1,
                    borderBottomWidth: 0,
                    borderRightStyle: 'solid',
                    paddingRight: '4rem',
                },
            }}
        >
            {career.company.imageComponent}
        </div>
        <div>
            <header>
                <div>
                    <Text
                        css={{
                            fontSize: '1.75rem',
                            fontWeight: 'bold',
                        }}
                    >
                        {career.company.title}
                    </Text>
                </div>
                <div
                    css={{
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem',
                    }}
                >
                    <Text
                        css={{
                            fontSize: '1.25rem',
                            color: '#6c757d',
                        }}
                    >
                        {career.company.period[0]} - {career.company.period[1]}
                    </Text>
                </div>
            </header>
            <article>
                <Text
                    css={{
                        fontSize: '1.2rem',
                    }}
                >
                    {career.company.bio}
                </Text>
            </article>
            <article
                css={{
                    marginTop: '1rem',
                }}
            >
                <Text
                    css={{
                        fontSize: '1.2rem',
                    }}
                >
                    {career.company.subbio}
                </Text>
            </article>
            <Divider
                style={{
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}
            />

            {/** TODO: 태그를 통해 사용 기술 추가하기 */}
            <div
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                {career.projectList
                    .sort(
                        ({period: [peroidA]}, {period: [peroidB]}) =>
                            new Date(peroidB).getTime() - new Date(peroidA).getTime()
                    )
                    .map((project) => (
                        <article key={project.title}>
                            <Text
                                css={{
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                }}
                            >
                                ▎ {project.title}
                            </Text>
                            <div
                                css={{
                                    marginTop: '0.5rem',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                <Text
                                    css={{
                                        fontSize: '1.1rem',
                                        color: '#6c757d',
                                    }}
                                >
                                    {project.period[0]} - {project.period[1]}
                                </Text>
                            </div>
                            <ul
                                css={{
                                    paddingLeft: '1rem',
                                    li: {
                                        marginBottom: '0.5rem',
                                    },
                                }}
                            >
                                {project.description.map((desc, idx) => (
                                    <li key={idx}>
                                        <Text>{desc}</Text>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
            </div>
        </div>
    </motion.div>
)

type CareerSectionProps = {
    sectionMethods: SectionMethodsType
}

const CareerSection: ForwardRefRenderFunction<
    HTMLDivElement,
    CareerSectionProps
> = ({sectionMethods}, ref) => {
    return (
        <Section
            ref={ref}
            css={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: '#f5f5f5',
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
                    title="CAREER"
                    onClickScrollClip={() => sectionMethods.scrollToSection(4)}
                />

                <motion.div
                    initial={{translateY: 0, opacity: 0}}
                    whileInView={{
                        translateY: -20,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                        x: {duration: 1},
                        default: {ease: 'linear'},
                    }}
                    viewport={{
                        once: true,
                    }}
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '3rem',
                        gap: '4rem',
                    }}
                >
                    {CareerList.map((career) => (
                        <CareerContent career={career} key={career.company.title}/>
                    ))}
                </motion.div>
            </Center>
        </Section>
    )
}

export default forwardRef(CareerSection)
