import HeaderList from "./HeaderList"

function HeaderNav() {
    const listTitles = {
        HOME : [
            'Scholarships Application',
            'Technologies Vacancies'
        ],
        ACADEMIC : [
            'Nursery',
            'Primary',
            'JSS',
            'SSS',
            'College of Education Programme',
            'Polytechic Programme'
        ],
        TEST_PREPARATION : [
            'TOEFL',
            'ETSL',
            'WAEC',
            'NECO',
            'GCE',
            'A-Level',
            'JAMB'
        ],
        SKILL_DEVELOPMENT : [
            'Computer Skills',
            'Programming Skills',
            'Design Skills',
            'Musical Skills',
            'Agricultural Skills',
            'Tailoring Skills',
            'Catering Skills',
            'Languages'
        ],
        STAKEHOLDERS : [
            'Students',
            'Parents',
            'Schools',
            'Tutors',
            'Organizations'
        ],
        ABOUT_US : [
            'Online Tutoring',
            'Online Shop',
            'Pricing',
            'Instant App',
            'Mobile App',
            'Our Team',
            'Contact Us'
        ]
    }

    return (
        <ul className={`md:flex px-6 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 md:mt-0`}>
            <HeaderList title='HOME' subTitle={listTitles.HOME}/>
            <HeaderList title='ACADEMIC' subTitle={listTitles.ACADEMIC}/>
            <HeaderList title='TEST PREPARATION' subTitle={listTitles.TEST_PREPARATION}/>
            <HeaderList title='SKILL DEVELOPMENT' subTitle={listTitles.SKILL_DEVELOPMENT}/>
            <HeaderList title='STAKEHOLDERS' subTitle={listTitles.STAKEHOLDERS}/>
            <li>BLOG</li>
            <HeaderList title='ABOUT_US' subTitle={listTitles.ABOUT_US}/>
            <li>DONATE</li>
            <li><button>logo2</button></li>
            <li><button>logo3</button></li>
        </ul>
    )
}

export default HeaderNav