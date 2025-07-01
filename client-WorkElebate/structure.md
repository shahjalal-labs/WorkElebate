# 📁 Project Structure

```bash
.
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── CNAME
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── assets
│   │   └── images
│   │       ├── index.js
│   │       ├── jobseeker1.jpg
│   │       └── jobseeker2.jpg
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   └── useHelmet.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── modules
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── components
│   │   │   │   ├── AuthSidebar.jsx
│   │   │   │   ├── constant.js
│   │   │   │   ├── SideBarCard.jsx
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── index.js
│   │   │   └── pages
│   │   │       ├── ForgotPass.jsx
│   │   │       ├── Signin.jsx
│   │   │       └── SignUp.jsx
│   │   ├── jobs
│   │   │   ├── AuthRoute.jsx
│   │   │   ├── components
│   │   │   │   └── Jobcard.jsx
│   │   │   ├── index.js
│   │   │   ├── JobRoute.jsx
│   │   │   └── pages
│   │   │       ├── JobApply.jsx
│   │   │       ├── JobDetails.jsx
│   │   │       ├── Jobs.jsx
│   │   │       └── ThankYou.jsx
│   │   ├── landing
│   │   │   ├── home
│   │   │   │   ├── Banner
│   │   │   │   │   ├── BannerCard.jsx
│   │   │   │   │   ├── BannerImg.jsx
│   │   │   │   │   └── Banner.jsx
│   │   │   │   └── Home.jsx
│   │   │   └── index.js
│   │   ├── myApplication
│   │   │   ├── component
│   │   │   │   ├── ApplicationTableHead.jsx
│   │   │   │   ├── ApplicationTable.jsx
│   │   │   │   └── ApplicationTableRow.jsx
│   │   │   └── pages
│   │   │       └── MyApplication.jsx
│   │   ├── shared
│   │   │   ├── Layout
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── CommonFooter.jsx
│   │   │   │   ├── index.js
│   │   │   │   ├── NavbarDrawer.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── RootLayout.jsx
│   │   │   │   └── Spinner.jsx
│   │   │   └── ui
│   │   │       ├── Brand.jsx
│   │   │       ├── Button.jsx
│   │   │       ├── index.js
│   │   │       └── Input.jsx
│   │   └── users
│   │       ├── admin
│   │       │   ├── AdminLayout.jsx
│   │       │   ├── components
│   │       │   ├── index.js
│   │       │   └── pages
│   │       ├── recruiter
│   │       │   ├── components
│   │       │   │   ├── AddJobBasicInfo.jsx
│   │       │   │   ├── AddJobFilter.jsx
│   │       │   │   ├── AddJobSelect.jsx
│   │       │   │   ├── Dropdown.jsx
│   │       │   │   ├── PostedJobTableRow.jsx
│   │       │   │   ├── SalaryRange.jsx
│   │       │   │   └── TextArea.jsx
│   │       │   ├── index.js
│   │       │   ├── pages
│   │       │   │   ├── AddJob.jsx
│   │       │   │   ├── ApplicantForPostedJobs.jsx
│   │       │   │   └── MyPostedJobs.jsx
│   │       │   ├── recruiter.constant.js
│   │       │   └── RecruiterLayout.jsx
│   │       └── seeker
│   │           ├── components
│   │           ├── index.js
│   │           ├── pages
│   │           └── SeekerLayout.jsx
│   ├── router
│   │   ├── ProtectedRoute.jsx
│   │   └── router.jsx
│   └── utils
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── navigate.jsx
│       ├── PageIntro.jsx
│       ├── postData.js
│       └── TypeWriterEffect.jsx
├── structure.md
└── vite.config.js

38 directories, 89 files

```
