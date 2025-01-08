import backgroundImage from "../../public/images/article-bg.jpg";

export default function Article4() {
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
      Evolution of Environmental movements and it’s impact climate in Sri Lanka
        </h1>
        <p className="text-center italic mb-8 text-black text-sm sm:text-base">
        By Isora Liyanaarachchi</p>

        {/* Article Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed mx-auto max-w-4xl text-justify">
        <p>
                    Known forits abundant biodiversity and strong ties
            to the natural world, Sri Lanka has a long history of
            environmental responsibility. National climate
            change strategies and conservation efforts have
            been influenced by the nation's expanding
            environmental movements overtheyears. A unique
            tale of resiliency and adaptation has been produced
            by the fusion of ancient customs with modern
            activism, highlighting both Sri Lanka's cultural
            heritage and the pressing problems brought on by
            climate change.
          </p>
          <p>
                    Sri Lanka has a long history of environmental
            consciousness that is ingrained in its customs and
            culture. The advanced water management systems of
            thenation's early civilizations demonstrated a
            profound awareness of ecological harmony. An
            engineering marvel of sustainability, the ancient tank
            cascade system showed how to use natural resources
            without depleting them, guaranteeing a consistent
            supply of water for local communities and agriculture
            while balancing with the ecosystems around them.
            Trees and sacred groves were essential to religious
            and social customs, demonstrating an early
            recognition of humanity's dependence on the
            environment. Nature was admiredDuring the 1960s and 1970s, Sri Lanka's modern
            environmental movement gained momentum in
            tandem with a global upsurge in ecological
            awareness. Local activism was spurred by landmark
            events like the inaugural Earth Day in 1970, which led
            organizations like the Wildlife and Nature Protection
            Society to step up their advocacy efforts. The
            foundation for significant policy changes and
            conservation efforts that would take place in the
            ensuing decades was laid during this time.
          </p>
          <p>
                    During the 1980s and 1990s, environmental
            awareness in Sri Lanka grew, bolstered by scholars
            and conservationists like Dr. Nimal Gunatilleke. His
            pivotal research on biodiversity highlighted the
            importance of protecting the nation’s distinctive
            plant and animal life, leading to the creation of
            protected areas such as the Sinharaja Forest Reserve,
            which later became a UNESCO World Heritage site.
            These efforts reflected Sri Lanka’s dedication to
            preserving its ecosystems and aligned with
            international conservation goals.
          </p>
          <p>
                    Younger generations have stepped up to demand
            action, with environmenta movements becoming
            moreactivein recent years. The Fridays forFuture movement and other youth-led initiatives
            have given the climate crisis a renewed sense of
            urgency by emphasizing the urgent need for
            sustainable practices and legislative changes. As a
            result of this wave of activism, Sri Lankans now view
            their role in addressing climate change as part of a
            global effort to address a shared existential
            challenge, rather than merely as protectors of their
            own environment.
          </p>
          <p>
                    Climate change has significant implications for Sri
            Lanka, affecting both its natural environment and
            cultural legacy. The harm resulting from changing
            weather patterns is evident at historic locations such
            as Sigiriya, Anuradhapura, and Polonnaruwa. Natural
            disasters, erratic rainfall, and rising temperatures
            accelerate the erosion and degradation of these
            historic sites. Coastal heritage sites are at even
            greater risk of submersion as a result of rising sea
            levels.
          </p>
          <p>
                    Climate change is also disrupting traditional
            agricultural
            practices
            that
            have
            sustained
            communities and maintained cultural continuity for
            generations. Farmers who once depended on reliable
            monsoon patterns now face severe droughtsand floods, which diminish crop yields and threaten
            food security. This uncertainty not only impacts their
            livelihoods but also poses challenges to cultural
            festivals and rituals connected to seasonal cycles,
            events that carry deep social and spiritual meaning.
          </p>
          <p>
                    In response to these challenges, Sri Lanka has
            adopted
            various
            preservation
            and
            adaptive
            strategies. Collaborations with organizations like
            UNESCO have been vital in introducing innovative
            solutions, such as developing 3D models of at-risk
            sites to facilitate restoration even in the event of
            damage. Climate-responsive architecture is also
            becoming morepopular, combining traditional
            building methods with modern materials designed to
            endure extreme weather conditions.
          </p>
          <p>
                    Local and international NGOs remain crucial in
            pushing for stronger environmental protections and
            sustainable policies. For example, the Centre for
            Environmental Justice has led legal efforts to
            safeguard ecosystems from industrial encroachment.
            Grassroots initiatives centered on eco-tourism and
            sustainable farming help communities take an active
            role in protecting their environment,aligning economic benefits with the goals of
            ecological conservation.
          </p>
          <p>
                    To help Sri Lanka balance the need to protect its
            heritage while building climate resilience, more
            robust strategies are vital. Investing in climate-
            focused research, especially studies that evaluate the
            long-term sustainability of cultural and ecological
            sites, will guide more effective actions. Reinforcing
            environmental policies, including those that prevent
            deforestation and illegal land use, is also crucial.
          </p>
          <p>
                    Education and awareness campaigns that connect
            heritage preservation with climate action can nurture
            a stronger cultural appreciation and motivate active
            involvement, especially among the youth. By
            presenting environmental stewardship as both
            honoring the past and committing to the future, Sri
            Lanka can create a more sustainable and climate-
            resilient path ahead.
          </p>
          <p>
                    Environmental movements in Sri Lanka demonstrate
            a potent fusion of traditional wisdom and
            contemporary activism, emphasizing the nation's
            enduring connection to the natural world. Theisland's rich cultural heritage and environment can be
            preserved for future generations with a collaborative,
            multifaceted strategy that involves community
            engagement, government support, and international
            cooperation, despite the substantial challenges
            posed by climate change. Real progress requires an
            awareness that harmony is essential, where lessons
            learned from the past inform present and future
            tactics
          </p>
        
        </div>
      </div>
    </div>
    </div>
  );
}
