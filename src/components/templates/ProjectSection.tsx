import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {Section} from './IntroSection.style'
import {motion} from 'framer-motion'
import {useTheme} from '@emotion/react'
import {forwardRef, ForwardRefRenderFunction} from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import {SectionMethodsType} from 'pages'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import Divider from '@components/atoms/Divider'
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper'

import ImgEdc1 from "@public/static/images/edc1.png";
import ImgEdc2 from "@public/static/images/edc2.png";
import ImgEdc4 from "@public/static/images/edc4.png";
import ImgEdc5 from "@public/static/images/edc5.png";
import ImgEdc7 from "@public/static/images/edc7.png";


type ProjectSectionProps = {
    sectionMethods: SectionMethodsType
}

type SkillTagProps = {
    title: string
}

const SkillTag = ({title}: SkillTagProps) => (
    <div
        css={{
            borderRadius: '1rem',
            border: '1px solid gray',
            padding: '0px 4px',
            cursor: 'pointer',
            userSelect: 'none',
        }}
    >
        <Text
            css={{
                fontSize: '0.875rem',
            }}
        >
            {title}
        </Text>
    </div>
)

const ProjectList = [
    {
        title: 'EDC',
        subTitle: '2023.10 - 2024.04 (사내 개발자 4人)',
        imageList: [ImgEdc1, ImgEdc2, ImgEdc4, ImgEdc5, ImgEdc7],
        description: (
            <>
                <div>
                    <Text>
                        EDC는{' '}
                        <Text bold>
                            사용자의 데이터 전송 관리 및 새로운 테이블 생성 도와주어 더 쉽고 편리함을 제공하는 서비스
                        </Text>입니다.

                        <br/>
                        <br/>

                        <Text bold>
                            1. 사용자의 쉬운 데이터 관리 방식 도입
                        </Text>
                        <br/>
                        <Text bold>
                            2. 유연한 BI 연동 방식 도입
                        </Text>
                        <br/>
                        <Text bold>
                            3. 데이터 관리를 위한 전송 주기 관리 도입
                        </Text>

                        <br/><br/><br/>

                        위 세 가지를 도입하여 3개의 대형 병원에 적용한 결과, 기존에 사용하기 어려웠던 BI 시스템을 더욱 간편하게 연결하고 활용할 수 있게 되었습니다.
                        이를 통해 병원에서는 데이터 분석 및 의사결정 과정을 신속하고 효율적으로 처리할 수 있게 되었습니다.
                        또한, 데이터 관리와 접근성이 개선되어 데이터를 더욱 쉽게 보고 관리할 수 있게 되었습니다.
                    </Text>
                </div>
            </>
        ),

        subDescription: [
            {
                title: '기술 스택',
                description: (
                    <div
                        css={{
                            display: 'flex',
                            gap: '0.25rem',
                            flexWrap: 'wrap',
                        }}
                    >
                        <SkillTag title="React"/>
                        <SkillTag title="Typescript"/>
                        <SkillTag title="Redux"/>
                        <SkillTag title="Jira"/>
                        <SkillTag title="GitLab"/>
                        <SkillTag title="Wehago(사내 프로그램)"/>
                    </div>
                ),
            },
        ],
    }
]

const ProjectSection: ForwardRefRenderFunction<
    HTMLDivElement,
    ProjectSectionProps
> = ({sectionMethods}, ref) => {
    const theme = useTheme()

    SwiperCore.use([Navigation, Pagination, Autoplay]) // 추가

    return (
        <Section
            ref={ref}
            css={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: theme.colors.black,
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
                    title="PROJECT"
                    color={theme.colors.white}
                    onClickScrollClip={() => sectionMethods.scrollToSection(5)}
                />

                {ProjectList.map((project) => (
                    <motion.div
                        key={project.title}
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
                            width: '100%',
                            marginTop: '4rem',
                            justifyContent: 'center',
                        }}
                    >
                        <Center
                            css={{
                                padding: '3rem',
                                borderRadius: '1rem',
                                backgroundColor: theme.colors.white,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Text
                                bold
                                css={{
                                    fontSize: '2rem',
                                }}
                            >
                                {project.title}
                            </Text>
                            <Text
                                css={{
                                    color: '#6c757d',
                                }}
                            >
                                {project.subTitle}
                            </Text>

                            <div
                                css={{
                                    display: 'flex',
                                    gap: '2rem',
                                    marginTop: '3rem',
                                    width: '100%',
                                    alignItems: 'center',
                                    maxWidth: '71.25rem',
                                    flexDirection: 'column',
                                    '@media (min-width: 800px)': {
                                        flexDirection: 'row',
                                    },
                                }}
                            >
                                <div
                                    css={{
                                        width: '100%',
                                        '@media (min-width: 800px)': {
                                            width: '50%',
                                        },
                                    }}
                                >
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 3000,
                                        }}
                                        loop
                                        navigation
                                        pagination={{clickable: true}}
                                    >
                                        {project.imageList.map((image) => (
                                            <SwiperSlide key={image.src}>
                                                <div
                                                    css={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        userSelect: 'none',
                                                    }}

                                                >
                                                    <Image src={image} alt={image.src}
                                                           width={150}
                                                           height={40}
                                                        layout="responsive"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div
                                    css={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        '@media (min-width: 800px)': {
                                            width: '50%',
                                        },
                                    }}
                                >
                                    <div>{project.description}</div>

                                    <div>
                                        <Divider
                                            style={{
                                                paddingBottom: '1rem',
                                                marginBottom: '1rem',
                                            }}
                                        />

                                        <div
                                            css={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '1rem',
                                            }}
                                        >
                                            {project.subDescription.map(({title, description}) => (
                                                <div
                                                    key={title}
                                                    css={{
                                                        display: 'flex',
                                                    }}
                                                >
                                                    <div
                                                        css={{
                                                            width: '9rem',
                                                        }}
                                                    >
                                                        <Text>{title}</Text>
                                                    </div>
                                                    <div>{description}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Center>
                    </motion.div>
                ))}
            </Center>
        </Section>
    )
}

export default forwardRef(ProjectSection)
