import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {Section} from './IntroSection.style'
import {motion} from 'framer-motion'
import {useTheme} from '@emotion/react'
import {forwardRef, ForwardRefRenderFunction} from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import {SectionMethodsType} from 'pages'

const ABOUT_ME_FIELD = [
    {title: '사진', fields: ['/static/images/20230221_031015.jpg']},
    {title: '이름', fields: ['홍건호']},
    {title: '생년월일', fields: ['1998.05.27']},
    {title: '전화번호', fields: ['010-3156-6304']},
    {title: 'Email', fields: ['booklike112@naver.com']},
]

type AboutMeSectionProps = {
    sectionMethods: SectionMethodsType
}

const ShowBox = () => {
    const theme = useTheme()

    return (
        <section
            css={{
                display: 'flex',
                flexDirection: 'column',
                '@media (min-width: 800px)': {
                    flexDirection: 'row',
                },
                justifyContent: "space-around",
                width: "100%",
                gap: '1rem',
                alignItems: "center"
            }}
        >
            {ABOUT_ME_FIELD.map(({fields, title}) => (
                    <div
                        key={title}
                        css={title === '사진' ? {
                                backgroundColor: theme.colors.white,
                                padding: '2rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                justifyContent: "center",
                                gap: '0.5rem',
                                boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
                                width: '70%',
                                '@media (min-width: 800px)': {
                                    width: '13%',
                                    padding: '0.5rem 0rem'
                                },
                            }
                            : {
                                backgroundColor: theme.colors.white,
                                padding: '2rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
                                width: '70%',
                                '@media (min-width: 800px)': {
                                    width: '20%',
                                },
                            }}
                    >

                        {
                            title === '사진'
                                ? <img css={{
                                    width: "60%",
                                }} src={"/static/images/20230221_031015.jpg"} alt={""}/>
                                : <>
                                    <Text
                                        css={{
                                            color: theme.colors.black,
                                            fontSize: '1.5rem',
                                            borderBottom: '1px solid #ccc',
                                            fontWeight: 'bold',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {title}
                                    </Text>
                                    <article
                                        css={{
                                            display: 'flex',
                                        }}
                                    >
                                        {fields.map((field, index) => (
                                            <Text
                                                key={field}
                                                css={{
                                                    fontSize: '1.25rem',
                                                }}
                                            >
                                                {field}
                                            </Text>
                                        ))}

                                    </article>
                                </>

                        }
                    </div>
                )
            )}

        </section>
    )
}

const AboutMeSection: ForwardRefRenderFunction<
    HTMLDivElement,
    AboutMeSectionProps
> = ({sectionMethods}, ref) => {
    const theme = useTheme()

    return (
        <Section
            ref={ref}
            css={{
                // justifyContent: 'center',
                // alignItems: 'flex-start',
                backgroundColor: theme.colors.gray,
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
                        width: '90%',
                        justifyContent: 'space-around',
                        marginTop: '4rem',
                        gap: '3rem',
                        flexDirection: 'column',
                        '@media (min-width: 800px)': {
                            flexDirection: 'row',
                        },
                    }}
                >
                    <ShowBox/>

                </motion.div>
            </Center>
        </Section>
    )
}

export default forwardRef(AboutMeSection)
