# New Life Bronx — Growth Track Quiz

## Project Overview
Build a bilingual (English/Spanish) ministry placement quiz web app for New Life Bronx Church called "Pasos de Crecimiento" (Growth Track). Built with Next.js 14 (App Router) and Tailwind CSS. All logic is client-side — no database needed.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Client-side state only (no backend/database)
- Deploy-ready for Vercel

## Language Toggle
- English/Spanish toggle visible on every page
- Defaults to Spanish
- All UI text, questions, and results switch instantly

## Quiz Flow
1. **Welcome Page** — Church name, description, Begin button
2. **Quiz Page** — All 92 questions in one continuous quiz, each rated Never / Rarely / Sometimes / Often / Always (1–5), with a progress bar
3. **Results Page** — DISC type + top 3 spiritual gifts + recommended Dream Team ministry

## IMPORTANT — How Scoring Works
All 92 questions are in ONE continuous quiz. There are NO separate sections shown to the user. After submission, the algorithm derives both DISC and Spiritual Gifts from the answers:
- Questions 1–20 → DISC score
- Questions 21–92 → Spiritual Gifts score

## DISC Scoring
- Q1–5 = D, Q6–10 = I, Q11–15 = S, Q16–20 = C
- Sum each section
- Highest = primary type
- If second highest is within 3 points → show combo (e.g. D/I)

## Spiritual Gifts Scoring
- Every 3 questions map to one gift (see groupings below)
- Sum scores per gift
- Top 3 = user's spiritual gifts

## Gift Groupings
A (Administration): 21, 45, 69
B (Apostleship): 22, 46, 70
C (Craftsmanship): 23, 47, 71
D (Discernment): 24, 48, 72
E (Evangelism): 25, 49, 73
F (Exhortation): 26, 50, 74
G (Faith): 27, 51, 75
H (Giving): 28, 52, 76
I (Healing): 29, 53, 77
J (Helps): 30, 54, 78
K (Hospitality): 31, 55, 79
L (Intercession): 32, 56, 80
M (Knowledge): 33, 57, 81
N (Leadership): 34, 58, 82
O (Mercy): 35, 59, 83
P (Miracles): 36, 60, 84
Q (Missionary): 37, 61, 85
R (Music/Worship): 38, 62, 86
S (Pastor/Shepherd): 39, 63, 87
T (Prophecy): 40, 64, 88
U (Service): 41, 65, 89
V (Teaching): 42, 66, 90
W (Tongues): 43, 67, 91
X (Wisdom): 44, 68, 92

## Dream Team Placement
- Look up which ministries each of the user's top 3 gifts maps to
- Tally ministry appearances
- Recommend ministry with highest count (show both if tie)

## Ministry Mapping
A. Administration → A-Team, Kids Check-in, Setup/Takedown, Production
B. Apostleship → Growth Track Team, Small Group Leadership
C. Craftsmanship → Facilities, New Life Kids, New Life Students, Setup/Takedown, Production
D. Discernment → Growth Track Team, Kids Check-in, Prayer Team, Ushers
E. Evangelism → Outreach, New Life Students, Prayer Team, Small Group Leadership
F. Exhortation → Outreach, Dream Team Serve, Events, Greeters, Growth Track Team, Hospitality Team, New Life Kids, New Life Students, Info/Resource Team, Kids Check-in, Parking Team, Preschool/Nursery, Small Group Leadership, Ushers
G. Faith → All Teams
H. Giving → Legacy Team
I. Healing → First Responders, Prayer Team
J. Helps → A-Team, Dream Team Serve, Events, Facilities, First Responders, Info/Resource Team
K. Hospitality → Dream Team Serve, Events, Greeters, Growth Track Team, New Life Students, Hospitality Team, Info/Resource Team, Kids Check-in, Parking Team, Ushers
L. Intercession → Prayer Team, Small Group Leadership
M. Knowledge → Outreach, First Responders, Prayer Team, Ushers
N. Leadership → All Teams
O. Mercy → Outreach, First Responders, Small Group Leadership
P. Miracles → Outreach, First Responders, Prayer Team
Q. Missionary → Outreach, Small Group Leadership
R. Music/Worship → New Life Kids, New Life Students, New Life Worship, Preschool/Nursery, Small Group Leadership
S. Pastor/Shepherd → Growth Track Team, New Life Kids, New Life Students, Small Group Leadership, Ushers
T. Prophecy → Prayer Team, Small Group Leadership
U. Service → A-Team, Dream Team Serve, Events, Preschool/Nursery, Setup/Takedown
V. Teaching → Small Group Leadership
W. Tongues → Prayer Team
X. Wisdom → New Life Worship, Prayer Team, Small Group Leadership, Ushers

## All 92 Questions (English — translate all to Spanish)

I am assertive, demanding, and decisive.
I enjoy doing multiple tasks at once.
I thrive in a challenge-based environment.
I think about tasks above others or myself.
I am motivated by accomplishment and authority.
I enjoy influencing and inspiring people.
I am optimistic about others.
I tend to be the life of the party.
I think about motivating people.
I am motivated by recognition and approval.
I thrive in consistent environments over changing ones.
I prefer specifics over generalizations.
I enjoy small groups of people.
I prefer being a member of a team over leading the team.
I am motivated by stability and support.
I typically do not take big risks.
I love tasks, order and details.
I am right most of the time.
I comply with clearly defined rules.
I am motivated by quality and correctness.
I like organizing services and events.
I enjoy starting new churches.
I enjoy working with my hands.
I can tell when someone is insincere.
I pray for the lost daily.
Encouraging others is a high priority in my life.
Believing God for our daily needs is important to me.
Influencing others for the kingdom of God through finances is extremely important to me.
I look for opportunities to pray for the sick.
I enjoy doing the little things that others do not.
I enjoy having people come to my house.
I enjoy spending hours in prayer for other people.
Education is very important to me.
I tend to motivate others to get involved.
My heart hurts when I see others hurting.
I believe God will use me to enact His miracles.
I enjoy sharing the gospel with other people groups and nationalities.
I've devoted considerable time to mastering my voice and or instrument.
Caring for the hurting is paramount in my eyes.
The willful sin of others really aggravates me.
I enjoy serving behind the scenes.
I enjoy creating outlines of the Bible.
God has used me to interpret a heavenly language.
I enjoy the book of Proverbs more than any other book in the Bible.
I am passionate about managing details.
I prefer to pioneer new ministry projects.
I consider myself a craftsman or craftswoman.
I sense when situations are spiritually unhealthy.
I am greatly concerned about seeing the lost saved.
I try to come across loving and caring.
Asking God for a list of big things is exciting to me.
I find ways to give offerings above my tithe.
I believe miraculous healing is for this day and age.
Helping others is one of my highest achievements.
Creating a warm and welcoming home is important to me.
I am burdened to pray for situations in the world.
People seek me out to learn more about the Kingdom of God.
I prefer to take the lead whenever necessary.
I'm very sensitive to sad stories.
Miracles often happen when I'm nearby.
Living in another country to benefit the gospel is exciting to me.
I desire to serve the church through worship.
I enjoy connecting, caring, and coaching others.
Confronting someone with sin in their life is not hard.
It bothers me when people sit around and do nothing.
I share Biblical truth with others in hopes of their personal growth.
I pray in tongues daily.
When I study scripture God gives me unique insights.
Creating a task list is easy and enjoyable for me.
I am attracted to ministries that start new churches.
Building something with my hands is very rewarding to me.
I can pinpoint issues or problems before others.
I enjoy sharing the gospel with a total stranger.
I look for ways to be an encouragement to other people.
I trust that God has my back in every situation.
Making more money means I can give more.
God has used me to bring healing to those who are sick.
Being a part of the process is fulfilling to me.
I tend to make total strangers feel at home.
People often describe me as a prayer warrior.
I enjoy knowing biblical details and helping others to understand.
I delegate responsibilities to accomplish tasks.
I am motivated to help those who are less fortunate.
I have a constant hunger to see God's miraculous power.
I focus a lot on reaching the world for Christ.
I gain my deepest satisfaction through leading others in vocal or instrumental worship.
I enjoy walking with someone in times of distress.
I enjoy hearing passionate and clear preaching of the truth.
I like to do small things that others pass over.
I prefer to teach the Bible topically rather than verse by verse.
Praying in the Spirit is encouraging and important to me.
When faced with difficulty I tend to make wise decisions and choices.


## Design
- Clean, modern, mobile-first
- Church-appropriate feel (not corporate)
- Primary color: deep blue or navy
- New Life Bronx branding throughout
- Progress bar during quiz
- Smooth transitions between pages

That's everything. Paste it in your claude.md and your coding agent will have full context every session. 🔥