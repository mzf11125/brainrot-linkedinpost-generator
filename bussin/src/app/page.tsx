"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageCircle, Heart, Rocket, Brain } from "lucide-react";

const BrainrotLinkedIn = () => {
  const [post, setPost] = useState("");

  const slangDict = {
    achievements: [
      "just hit a major rizz milestone",
      "achieved peak sigma status",
      "got absolutely cracked at my job",
      "had the most bussin presentation",
      "secured that massive W",
      "experienced a glow-up in my career",
      "demonstrated peak NPC grinding behavior",
      "achieved maximum gyatt efficiency",
      "popped off in the quarterly meeting",
    ],

    businessBuzzwords: [
      "synergistic skibidi mindset",
      "sigma male grindset",
      "rizz-based leadership",
      "core NPC competencies",
      "based decision-making framework",
      "high-key disruption",
      "no cap productivity",
      "clutch performance metrics",
      "absolutely cracked ROI",
    ],

    reflections: [
      "Big mood: Sometimes you need to be the main character in your professional journey.",
      "Vibe check: Your career is just a massive speedrun.",
      "Remember: Keep that queen energy in every meeting.",
      "No cap, the grind never stops.",
      "Stay based and keep that sigma mindset.",
      "Major key: Always maintain that bussin professional energy.",
      "Real talk: Sometimes you gotta pop off in the corporate world.",
      "Hot take: Being mid at your job is not the move.",
      "Straight up living that corporate W lifestyle.",
    ],

    metrics: [
      "💯 Rizz level: Maximized",
      "📈 Sigma score: Through the roof",
      "🔥 Clutch rating: Over 9000",
      "🎯 NPC efficiency: Optimized",
      "🚀 Skibidi momentum: Unstoppable",
      "💪 Gyatt perspective: Activated",
      "🧠 Big brain moves: Constant",
      "⚡ Based decision rate: 100%",
    ],

    hashtags: [
      "#Skibidi",
      "#SigmaMindset",
      "#NPCgrindset",
      "#RizzCEO",
      "#CorporateGyatt",
      "#ProfessionalW",
      "#NoCapSuccess",
      "#BasedLeadership",
      "#CrackedProductivity",
      "#BussinBusiness",
    ],
  };

  const generatePost = () => {
    const achievement =
      slangDict.achievements[
        Math.floor(Math.random() * slangDict.achievements.length)
      ];
    const buzzword1 =
      slangDict.businessBuzzwords[
        Math.floor(Math.random() * slangDict.businessBuzzwords.length)
      ];
    const buzzword2 =
      slangDict.businessBuzzwords[
        Math.floor(Math.random() * slangDict.businessBuzzwords.length)
      ];
    const reflection =
      slangDict.reflections[
        Math.floor(Math.random() * slangDict.reflections.length)
      ];
    const metrics = Array.from(
      { length: 3 },
      () =>
        slangDict.metrics[Math.floor(Math.random() * slangDict.metrics.length)]
    );
    const hashtags = Array.from(
      { length: 4 },
      () =>
        slangDict.hashtags[
          Math.floor(Math.random() * slangDict.hashtags.length)
        ]
    );

    const template = `🚀 MASSIVE W ALERT! 

I just ${achievement} and I'm literally shaking rn fr fr.

While some might call this a mid achievement, real ones know this is all about that ${buzzword1} combined with ${buzzword2}. ${reflection}

Key performance indicators (no cap):
${metrics.join("\n")}

Shoutout to my work besties for the constant support (real). Together we're not just hitting KPIs - we're absolutely demolishing them, no kizzy.

Feeling blessed and highly favored. 🙏

Thoughts? 🤔

${hashtags.join(" ")} #GrindNeverStops #Blessed #ThankYouForComingToMyTedTalk`;

    setPost(template);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            Brainrot LinkedIn AI Post Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={generatePost}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          >
            {/* <Fire className="w-4 h-4" /> */}
            Generate Absolutely Unhinged Post
          </Button>

          {post && (
            <div className="space-y-4">
              <Card className="p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-bold">
                      Certified Rizz Professional™
                    </div>
                    <div className="text-sm text-gray-600">
                      Chief Sigma Officer | Web3 Skibidi Innovator |
                      Professional Gyatt Consultant
                    </div>
                  </div>
                </div>
                <div className="whitespace-pre-wrap">{post}</div>
                <div className="flex gap-4 mt-4 text-gray-600">
                  <button className="flex items-center gap-1" type="button">
                    <ThumbsUp className="w-4 h-4" />
                    Be Based
                  </button>
                  <button className="flex items-center gap-1" type="button">
                    <MessageCircle className="w-4 h-4" />
                    Drop W
                  </button>
                  <button className="flex items-center gap-1" type="button">
                    <Heart className="w-4 h-4" />
                    Show Rizz
                  </button>
                </div>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BrainrotLinkedIn;
