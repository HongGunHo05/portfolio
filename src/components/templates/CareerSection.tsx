import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {Section} from './IntroSection.style'
import {motion} from 'framer-motion'

import Image from 'next/image'
import ImgDouzone from "@public/static/images/douzone.jpg"
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
            title: '(주) 더존비즈온',
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
                        <Image src={ImgDouzone}/>
                    </div>
                </div>
            ),

            period: ['2023.03', '2024.05'],
            bio: (
                <>
                    (주) 더존비즈온은{' '}
                    <Text bold>기업 경영과 회계 솔루션을 제공하는 있는 회사</Text>
                    이며, 다양한 산업 분야에 맞춤형 ERP 시스템과 클라우드 서비스를 개발하고 있습니다.
                    이 회사는 중소기업부터 대기업까지 폭넓은 고객층을 보유하고 있으며, 효율적인 경영 관리와 데이터 분석을 통해 기업의 성장을 지원합니다.
                    더존비즈온은 혁신적인 기술을 적용하여 사용자 친화적인 인터페이스와 강력한 기능을 갖춘 솔루션을 제공하며, 지속적인 연구개발을 통해 업계를 선도하고 있습니다.
                    또한, 고객의 요구에 맞춘 맞춤형 서비스를 통해 높은 고객 만족도를 유지하고 있습니다.
                </>
            ),
            subbio: (
                <>
                    프론트엔드 업무를 중점으로 일을 진행 하였고 자바를 이용한 백 프로젝트도 맡아 일을 진행 하였습니다.
                    <Text bold>
                        회사의 프로그램에 적용 시킬 다양한 신규 프로젝트를 진행하며 새로운 기능 및 언어들을 사용 하였습니다.
                    </Text>
                </>
            ),
        },
        projectList: [
            {
                title: 'EDC 프로젝트',
                period: ['2023.10', '2024.04'],
                description: [
                    '- 사용자가 직접 데이터 관리 및 전송 주기 설정 등을 하여 보다 편리함을 주기 위해 개발',
                    <>
                        - 신규 서비스 이기에 빠른 프로토 타입 제작 및 시연 후 {' '}
                        <Text bold>
                            고도화를 통한 리엑트 컴포넌트 성능 정리
                        </Text>
                    </>,
                    <>
                        - 현재 병원 3곳에서 사용
                    </>,
                ],
            },
            {
                title: 'BI',
                period: ['2023.06', '2024.04'],
                description: [
                    '- 회사 프로그램과 연결 되어 있는 BI 관리',
                    <>
                        - SSO : 프로그램 로그인을 통한 생성된 토큰 관리를 하여 BI에 추가적은 로그인 단계 넘어가게 하였습니다.
                    </>,
                    <>
                        - 신규 병원이 회사와 계약을 맺었을 시 BI 구축 하였습니다.
                    </>,
                    <>
                        - 기존 코드 고도화 하여 사용하지 않던 공유 기능 적용 및 불필요한 코드 삭제 하였습니다.
                    </>,
                ],
            },
            {
                title: '사내 프로그램 UI 디자인 및 기능 구현',
                period: ['2023.03', '2024.04'],
                description: [
                    '- 개발자가 직접 쓰는 화면 커스텀',
                    <>
                        - 행안부에서 제공하는 검색 서비스 회사 스타일에 맞게 변경 하였습니다.
                    </>,
                    <>
                        {"   "}검색어 수정 api를 이용하여 사용자가 잘못 검색 시 입력값과 유사한 검색어 추천 기능 추가 하였습니다.
                    </>,
                    <>
                        - apisix등 회사 내 사용 프로그램을 회사 스타일로 변경 및 디자인 변경으로 사용자의 편리함 제공 하였습니다.
                    </>,
                ],
            }, {
                title: '병원 데이터 대시보드',
                period: ['2023.07', '2023.07'],
                description: [
                    '- 병원별 데이터 시각화를 해주기 위한 대시보드 제작',
                    <>
                        - 기존 데이저 전송 하는 병원들의 데이터 관리 및 시각화를 위해 대시보드 제작 하였습니다.
                    </>,
                    <>
                        - ECharts를 이용하여 유연한 차트 및 사용자의 커스텀 가능한 테이블 제공하여 다양한 화면 제공 하였습니다.
                    </>,
                ],
            }, {
                title: '신규 기술 소개 및 시연',
                period: ['2023.03', '2024.04'],
                description: [
                    '- 신규 기술을 이용하여 발표 및 테스트 서비스 제작',
                    <>
                        - GPT4 Function Calling 등 새로운 기술 나왔을 시 PPT 제작하여 공유 및 발표 하였습니다.
                    </>,
                    <>
                        - Function Calling을 이용한 SQL Tuner 서비스 , 사용자 입력 따른 FastAPI 코드구성 서비스 구축 하였습니다.
                    </>,
                ],
            }
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
