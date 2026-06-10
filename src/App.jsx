import './App.css'
import BoardCard from './components/BoardCard'

const App = () => {
  return (
    <div className="app">

      <div className="header">
        <h1>UTD Student Productivity Board</h1>
        <p>Built around UT Dallas tools, study flow, and student life</p>
      </div>

      <div className="grid">

        <BoardCard title="CS Notes Hub" description="Organized lecture notes for CS classes" link="#" type="blue" />
        <BoardCard title="LeetCode Practice" description="Daily DSA grind" link="https://leetcode.com" type="green" />
        <BoardCard title="Resume Tracker" description="Track internship applications" link="#" type="orange" />
        <BoardCard title="GPA Calculator" description="Estimate semester GPA" link="#" type="pink" />
        <BoardCard title="Gym Plan" description="Weekly workout routine" link="#" type="green" />
        <BoardCard title="Study Schedule" description="Time-blocked study plan" link="#" type="blue" />
        <BoardCard title="Internship List" description="Companies to apply to" link="#" type="orange" />
        <BoardCard title="YouTube Learning" description="Saved CS playlists" link="https://youtube.com" type="pink" />
        <BoardCard title="Discord Study Group" description="Peer help and discussion" link="#" type="blue" />
        <BoardCard title="Project Ideas" description="Hackathon + portfolio ideas" link="#" type="green" />

      </div>

    </div>
  )
}

export default App