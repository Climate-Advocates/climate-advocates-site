import backgroundImage from "../../public/images/article-bg.jpg";

export default function Article3() {
  return (
    <div 
      className="pt-20 relative"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      {/* Translucent Overlay with Fade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 51, 0, 0.6), rgba(0, 51, 0, 0))`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
    

      {/* Article Content */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      {/* Title and Author */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-black">
      What International Climate Justice Means for Sri Lanka
        </h1>
        <p className="text-center italic mb-8 text-black text-sm sm:text-base">
          By Sanjali De Silva
        </p>

        {/* Article Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
        <p>
          Earlier this month I visited my family in Sri Lanka and found that everything has changed since my last visit almost four years ago. 
          As I embraced my family, I felt a palpable fatigue from the pressures of the pandemic, political unrest, and geopolitical turmoil bubbling 
          beneath the surface.
          </p>
          <p>
          As Sri Lanka recovers from the worst economic crisis since its independence, climate change impacts are also quietly fueling and exacerbating 
          the situation. My trip to Sri Lanka presented a stark reminder of how international leaders so often fail to protect the Global South from the 
          climate crisis, and why initiatives to demand accountability from those most responsible for this crisis are paramount.
          </p>
          <p>
          We spent a lot of time indoors during my recent visit, dodging the heat and avoiding torrential downpours. An unusual practice during a 
          mid-March visit.
          </p>
          <p>
          Every trip back to Sri Lanka, climate change impacts become more visible. Over handfuls of rice that nearly 30% of the country is struggling to afford, 
          talk of flash floods, prolonged drought, sea level rise and extreme weather dominated more than ever before.For a country reliant on farming 
          to feed communities and keep its economy alive, climate change impacts that disproportionately threaten agriculture areas have far-reaching and 
          devastating impacts.
          </p>
          <p>
          Between 1998 and 2012, the total loss from natural disasters in Sri Lanka was over $570 million, predominantly from flooding and cyclone 
          damage, some of which caused irreparable damage to the southern coast of the island where my dad and his four siblings grew up.
          </p>
          <p>
          “Sri Lanka is shrinking,” my auntie said very matter-of-factly one night, her offhand comment serving as an acute reminder of 
          rising sea levels along the coast.
          </p>
          <p>
          Wallets are strapped as my uncles write checks to fix broken roofs, and hearts are heavy looking at old family pictures of the 
          beautiful beaches that once were.
          </p>
          <p>
          We regularly chowed on ambul thiyal, a traditional fish curry and a delicacy during the upcoming New Year holiday. Fish makes up 50% 
          of Sri Lankans animal protein intake, three times the global average. But sea level rise and pollution are threatening this critical resource 
          and the livelihoods of over one million fishers around the country.
          </p>
          <p>
          Climate change in Sri Lanka is driving a hunger crisis, an economic crisis, and a political crisis. Meanwhile, Sri Lanka’s relative heat-trapping 
          emissions are next to none compared with major emitting nations like the United States. The people of Sri Lanka feel the impacts of climate change 
          every day, yet those effects are overwhelmingly caused by the self-serving, irresponsible actions of the fossil fuel industry and nations 
          unwilling to do their part to stop the climate crisis. My family and the people of Sri Lanka deserve better.
          </p>
          <p>
          This year, Sri Lanka joined an effort, led by the Government of Vanuatu, calling on the United Nations General Assembly to pass a resolution 
          asking the International Court of Justice (ICJ) to issue critical guidance to clarify the obligation of nations to protect current and future 
          generations from climate change.
          </p>
          <p>
          Today, more than 130 UN nations came together in consensus to adopt the resolution, taking the fight for climate justice an important step 
          forward. For countries like Sri Lanka—whose land is under siege by other nations’ climate negligence and who rarely get a seat at the table—this 
          resolution is pivotal.
          </p>
          <p>
          Seeing the UN recognize climate change as a threat to human rights and intergenerational justice, I feel a sense of hope that my nangis and 
          malis—my little cousins—may have a prosperous future ahead of them in Sri Lanka.
          </p>
          <p>
          Following a grim outlook from the United Nation’s Intergovernmental Panel on Climate Change (IPCC) last week, this new resolution could help ensure
          countries can meet mitigation goals and slow the crippling impacts of climate change.
          </p>
          <p>
          In the weeks and months ahead, it’s critical that our international leaders continue this drumbeat of work and move to eliminate fossil fuel 
          influence from the United Nations Framework Convention on Climate Change (UNFCC) process, equitably implement the loss and damage fund created 
          at COP27 in Egypt and effectively hold individual nations accountable for their role in accelerating the climate crisis.
          </p>
          <p>
          As a young climate activist, a science advocate, and a proud Sri Lankan, I’m calling on our world’s top leaders to step up. My family halfway 
          across the globe, the communities of small island nations all the world over, and our planet are counting on you.
          </p>
        
        </div>
      </div>
    </div>
    </div>
  );
}
