import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {Section} from './IntroSection.style'
import {motion} from 'framer-motion'
import Image, {StaticImageData} from 'next/image'
import IconHtml5 from '@public/static/logo/skills/html5.png'
import IconCss from '@public/static/logo/skills/css.png'
import IconJs from '@public/static/logo/skills/js.png'
import IconTs from '@public/static/logo/skills/ts.png'
import IconSass from '@public/static/logo/skills/sass.png'
import IconStyledComponent from '@public/static/logo/skills/styled-component.png'
import IconReact from '@public/static/logo/skills/react.png'
import IconRedux from '@public/static/logo/skills/redux.png'
import IconMysql from '@public/static/logo/skills/mysql.png'
import IconPostgresql from '@public/static/logo/skills/postgresql.png'
import IconFigma from '@public/static/logo/skills/figma.png'
import IconGit from '@public/static/logo/skills/git.jpg'
import IconJava from '@public/static/logo/skills/java.png'
import IconPython from '@public/static/logo/skills/python.jpg'
import IconNotion from '@public/static/logo/skills/notion.png'

import {Interpolation} from '@emotion/styled'
import {CSSObject, Theme, useTheme} from '@emotion/react'
import SectionTitle from '@components/organisms/SectionTitle'
import {forwardRef, ForwardRefRenderFunction} from 'react'
import {SectionMethodsType} from 'pages'
import {theme} from "../../../pages/_app";

type SkillItemProps = {
    src: string | StaticImageData
    imageContainerStyle: Interpolation<Theme>
    containerStyle?: CSSObject
}

const SkillItem = ({
                       src,
                       imageContainerStyle,
                       containerStyle,
                   }: SkillItemProps) => (
    <motion.div
        whileHover={{scale: 1.1}}
        css={{
            borderWidth: 2,
            borderColor: '#eeeeee',
            borderStyle: 'solid',
            cursor: 'pointer',
            borderRadius: '1rem',
            userSelect: 'none',
            display: 'flex',
            width: '90px',
            height: '90px',
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle,
        }}
    >
        <div css={imageContainerStyle}>
            <Image src={src} alt={""}
                   width={150}
                   height={40}
                layout="responsive"
            />
        </div>
    </motion.div>
)

const FrontendSection = () => {
    const theme = useTheme()

    return (
        <section>
            <div
                css={{
                    backgroundColor: theme.colors.white,
                    padding: '2rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
                }}
            >
                <Text
                    css={{
                        color: theme.colors.carrot,
                        fontSize: '1.5rem',
                        borderBottom: '1px solid #ccc',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    FrontEnd
                </Text>
                {/** 1 Line */}
                <article
                    css={{
                        display: 'flex',
                        gap: '0.5rem',
                        justifyContent: 'space-between',
                        width: '280px',
                    }}
                >
                    <SkillItem
                        src={IconHtml5}
                        imageContainerStyle={{
                            width: '4.25rem',
                        }}
                    />
                    <SkillItem
                        src={IconCss}
                        imageContainerStyle={{
                            width: '3rem',
                        }}
                    />
                    <SkillItem
                        src={IconJs}
                        imageContainerStyle={{
                            width: '3rem',
                        }}
                    />
                </article>

                {/** 2 Line */}
                <article
                    css={{
                        display: 'flex',
                        gap: '0.5rem',
                        justifyContent: 'space-between',
                        width: '280px',
                    }}
                >
                    <SkillItem
                        src={IconTs}
                        imageContainerStyle={{
                            width: '4rem',
                        }}
                    />

                    <SkillItem
                        src={IconSass}
                        imageContainerStyle={{
                            width: '10rem',
                            marginLeft: '-1rem',
                            marginRight: '-1rem',
                        }}
                    />

                    <SkillItem
                        src={IconStyledComponent}
                        imageContainerStyle={{
                            width: '4rem',
                        }}
                        containerStyle={{
                            backgroundColor: 'black',
                        }}
                    />
                </article>


                {/** 6 Line */}
                <article
                    css={{
                        display: 'flex',
                    }}
                >
                    <SkillItem
                        src={IconReact}
                        imageContainerStyle={{
                            width: '12rem',
                            paddingTop: '0.7rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />
                </article>

                {/** 8 Line */}
                <article
                    css={{
                        display: 'flex',
                    }}
                >
                    <SkillItem
                        src={IconRedux}
                        imageContainerStyle={{
                            width: '12rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />
                </article>
            </div>
        </section>
    )
}

const BackendSection = () => {
    const theme = useTheme()

    return (
        <section>
            <div
                css={{
                    backgroundColor: theme.colors.white,
                    padding: '2rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
                }}
            >
                <Text
                    css={{
                        color: theme.colors.carrot,
                        fontSize: '1.5rem',
                        borderBottom: '1px solid #ccc',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    Backend
                </Text>
                {/** 1 Line */}

                {/** 2 Line */}
                <article
                    css={{
                        display: 'flex',
                        gap: '0.5rem',
                    }}
                >
                    <SkillItem
                        src={IconJava}
                        imageContainerStyle={{
                            width: '5rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />
                    <SkillItem
                        src={IconPython}
                        imageContainerStyle={{
                            width: '3.5rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />

                </article>

                {/** 3 Line */}
                <article
                    css={{
                        display: 'flex',
                        gap: '0.5rem',
                    }}
                >
                    <SkillItem
                        src={IconMysql}
                        imageContainerStyle={{
                            width: '8rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />
                    <SkillItem
                        src={IconPostgresql}
                        imageContainerStyle={{
                            width: '5rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />
                </article>
            </div>
        </section>
    )
}

const CommunitySection = () => {
    const theme = useTheme()

    return (
        <section>
            <div
                css={{
                    backgroundColor: theme.colors.white,
                    padding: '2rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
                    gap: '0.5rem',
                }}
            >
                <Text
                    css={{
                        color: theme.colors.carrot,
                        fontSize: '1.5rem',
                        borderBottom: '1px solid #ccc',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    Community
                </Text>
                {/** 1 Line */}
                <article
                    css={{
                        display: 'flex',
                        width: '280px',
                    }}
                >
                    <SkillItem
                        src={IconFigma}
                        imageContainerStyle={{
                            width: '9rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />
                </article>

                <article
                    css={{
                        display: 'flex',
                        width: '280px',
                    }}
                >
                    <SkillItem
                        src={IconNotion}
                        imageContainerStyle={{
                            width: '9rem',
                        }}
                        containerStyle={{
                            width: '100%',
                        }}
                    />
                </article>
            </div>
        </section>
    )
}

type MySkillSectionProps = {
    sectionMethods: SectionMethodsType
}

const MySkillSection: ForwardRefRenderFunction<
    HTMLDivElement,
    MySkillSectionProps
> = ({sectionMethods}, ref) => {
    return (
        <Section
            ref={ref}
            css={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: theme.colors.gray2,
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
                    title="SKILLS"
                    onClickScrollClip={() => sectionMethods.scrollToSection(2)}
                />

                <motion.div
                    css={{
                        display: 'flex',
                        marginTop: '3rem',
                        justifyContent: 'center',
                        width: '100%',
                        gap: '2rem',
                    }}
                    viewport={{
                        once: true,
                    }}
                    initial={{translateY: 0, opacity: 0}}
                    whileInView={{
                        translateY: -20,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        x: {duration: 1},
                        default: {ease: 'linear'},
                    }}
                >
                    <div
                        css={{
                            display: 'flex',
                            gap: '2rem',
                            flexDirection: 'column',
                            '@media (min-width: 1200px)': {
                                flexDirection: 'row',
                            },
                        }}
                    >
                        <FrontendSection/>

                        <div
                            css={{
                                display: 'flex',
                                gap: '2rem',
                                flexDirection: 'column',
                            }}
                        >
                            <BackendSection/>
                            <CommunitySection/>
                        </div>

                    </div>
                </motion.div>
            </Center>
        </Section>
    )
}

export default forwardRef(MySkillSection)
