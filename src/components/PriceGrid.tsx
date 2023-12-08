export default function PriceGrid() {
  return (
    <div className="bg-white font-karla w-80 rounded-[0.3125rem] lg:w-[40rem] shadow-[0_15px_30px_0_rgba(0,81,171,0.15)]">
      <div className="p-6 lg:p-10">
        <h1 className="text-teal font-bold text-xl mb-6">Join our community</h1>
        <h2 className="text-lime font-bold text-[0.9375rem] leading-5 tracking-[0.01169rem] mb-4">
          30-day, hassle-free money back guarantee
        </h2>
        <p className="text-gray text-sm leading-[1.625rem] tracking-[0.01094rem] mb-2">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="text-white grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-teal p-6 lg:p-10">
          <h1 className="text-xl font-bold mb-4">Monthly Subscription</h1>
          <p className="flex items-center">
            <span className="text-[2rem] font-bold">$29</span>
            <span className="opacity-50 ml-4 leading-[1.625rem]">
              per month
            </span>
          </p>
          <p className="mb-6">Full access for less than $1 a day</p>
          <button className="bg-lime rounded-[0.3125rem] py-4 px-20 font-bold tracking-[-0.0125rem]">
            Sign Up
          </button>
        </div>
        <div className="bg-teal bg-opacity-[0.85] p-6 lg:p-10">
          <h1 className="text-xl font-bold mb-4">Why Us</h1>
          <p className="opacity-75 leading-5 text-sm">
            Tutorials by industry experts
            <br />
            Peer & expert code review
            <br />
            Coding exercises
            <br />
            Access to our GitHub repos
            <br />
            Community forum
            <br />
            Flashcard decks
            <br />
            New videos every week
          </p>
        </div>
      </div>
    </div>
  )
}
