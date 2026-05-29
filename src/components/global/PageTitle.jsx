import React from 'react'

const PageTitle = ({ title, bgImage }) => {
    return (
        <section className="w-full relative overflow-hidden px-3"
        >
            <div className="container rounded-[14px] md:rounded-3xl min-h-110 relative overflow-hidden flex flex-col justify-center p-16">

                <div
                    className="absolute inset-x-0 top-0 h-[130%] w-full -z-10 origin-center pointer-events-none"
                    style={{
                        backgroundImage: `url(${bgImage || "/hero-bg.webp"})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Brand dark mask overlay inside the background layer */}
                    <div className="absolute inset-0 w-full h-full bg-linear-to-r from-secondary via-secondary/80 to-primary/50"></div>
                </div>

                <div className="z-5 w-full md:max-w-[58%] lg:max-w-[50%] mx-auto flex items-center justify-center">
                    <h1 className="text-4xl md:text-[72px] text-center text-white">
                        {title}
                    </h1>
                </div>

            </div>
        </section>
    )
}

export default PageTitle
