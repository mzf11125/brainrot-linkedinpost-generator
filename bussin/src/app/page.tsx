"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageCircle, Heart, Brain } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const BrainrotLinkedIn = () => {
  const [post, setPost] = useState("");
  const [postLength, setPostLength] = useState(300);
  const [includeEmojis, setIncludeEmojis] = useState(true);
  const [formalityLevel, setFormalityLevel] = useState(50);

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
      "became the ultimate meme lord at work",
      "finally got that high-key promotion",
      "mastered the art of corporate cooking",
      "reached maximum professional drip",
      "unlocked new levels of based behavior",
      "achieved main character status in meetings",
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
      "delulu-free strategy",
      "goofy ahh innovation",
      "real talk optimization",
      "big brain initiatives",
      "mogging competition analysis",
      "professional gyatt management",
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
      "Erm what the sigma: Success is all about that mindset.",
      "Chat is this real?: The achievements we're making.",
      "Pookie, let me tell you about success.",
      "Keeping that delulu-free mindset for success.",
      "Little bro, the corporate world is just a big backroom.",
      "Sometimes you gotta cook in those meetings fr fr.",
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
      "🌟 Professional drip: Infinite",
      "🎮 Corporate speedrun: Perfect",
      "🔄 Grindset multiplier: Maximum",
      "💫 Main character energy: Peaked",
      "🎭 Professional cooking: Master level",
      "🌈 Vibe check status: Passed",
      "🎯 Slay probability: 100%",
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
      "#DelululFree",
      "#CorporatePookie",
      "#BigBrainMoves",
      "#GlowUpSeason",
      "#SlayAtWork",
      "#CorporateCooking",
      "#BusinessBackrooms",
      "#ProfessionalMogging",
    ],
  };

  const generatePost = () => {
    const getRandomItems = (arr, count) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const achievement = getRandomItems(slangDict.achievements, 1)[0];
    const buzzwords = getRandomItems(slangDict.businessBuzzwords, 2);
    const reflection = getRandomItems(slangDict.reflections, 1)[0];
    const metricCount = Math.floor(postLength / 100);
    const metrics = getRandomItems(slangDict.metrics, metricCount);
    const hashtagCount = Math.floor(postLength / 75);
    const hashtags = getRandomItems(slangDict.hashtags, hashtagCount);

    const emojis = includeEmojis ? "🚀 💫 " : "";
    const formalPrefix =
      formalityLevel > 75
        ? "I am pleased to announce that "
        : formalityLevel > 50
        ? "Excited to share that "
        : formalityLevel > 25
        ? "YOOO! "
        : "SHEEEESH! ";

    const template = `${emojis}${formalPrefix}

I just ${achievement} and ${
      formalityLevel > 50
        ? "I'm thrilled to share"
        : "I'm literally shaking rn fr fr"
    }.

${
  formalityLevel > 75
    ? "Through strategic implementation"
    : "While some might call this mid"
}, this achievement combines ${buzzwords[0]} with ${buzzwords[1]}. ${reflection}

${
  formalityLevel > 50 ? "Key performance indicators" : "The real numbers fr fr"
} ${formalityLevel > 75 ? ":" : "no cap:"} 
${metrics.join("\n")}

${formalityLevel > 50 ? "I'd like to acknowledge" : "Shoutout to"} my work ${
      formalityLevel > 75 ? "colleagues" : "besties"
    } for the constant support (real). Together we're not just hitting KPIs - we're absolutely demolishing them, ${
      formalityLevel > 50 ? "indeed" : "no kizzy"
    }.

${
  formalityLevel > 75
    ? "Feeling grateful"
    : "Feeling blessed and highly favored"
}. 🙏

${formalityLevel > 50 ? "Thoughts?" : "Thoughts? 🤔"}

${hashtags.join(" ")} #GrindNeverStops #Blessed ${
      formalityLevel < 50 ? "#ItsGivingCEO" : ""
    }`;

    // Trim post if it exceeds desired length
    let finalPost = template;
    if (template.length > postLength) {
      finalPost = template.slice(0, postLength) + "...";
    }

    setPost(finalPost);
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
          <div className="space-y-4">
            <div>
              <Label>Post Length (characters)</Label>
              <Slider
                value={[postLength]}
                onValueChange={(value) => setPostLength(value[0])}
                min={100}
                max={500}
                step={50}
                className="my-2"
              />
              <div className="text-sm text-gray-500">
                {postLength} characters
              </div>
            </div>

            <div>
              <Label>Formality Level</Label>
              <Slider
                value={[formalityLevel]}
                onValueChange={(value) => setFormalityLevel(value[0])}
                min={0}
                max={100}
                step={25}
                className="my-2"
              />
              <div className="text-sm text-gray-500">
                {formalityLevel <= 25
                  ? "Maximum Brainrot"
                  : formalityLevel <= 50
                  ? "Casual Vibes"
                  : formalityLevel <= 75
                  ? "Semi-Professional"
                  : "LinkedIn Professional"}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                checked={includeEmojis}
                onCheckedChange={setIncludeEmojis}
                id="emoji-mode"
              />
              <Label htmlFor="emoji-mode">Include Emojis</Label>
            </div>

            <Button
              onClick={generatePost}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
            >
              Generate Absolutely Unhinged Post
            </Button>
          </div>

          {post && (
            <div className="space-y-4">
              <Card className="p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-bold">
                      {formalityLevel > 75
                        ? "Strategic Innovation Leader"
                        : formalityLevel > 50
                        ? "Digital Transformation Specialist"
                        : formalityLevel > 25
                        ? "Chief Rizz Officer"
                        : "Professional Skibidi Consultant"}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formalityLevel > 50
                        ? "Web3 Innovation Strategist | Thought Leader"
                        : "Professional Gyatt Consultant | Sigma Grindset Coach"}
                    </div>
                  </div>
                </div>
                <div className="whitespace-pre-wrap">{post}</div>
                <div className="flex gap-4 mt-4 text-gray-600">
                  <button className="flex items-center gap-1" type="button">
                    <ThumbsUp className="w-4 h-4" />
                    {formalityLevel > 50 ? "Like" : "Be Based"}
                  </button>
                  <button className="flex items-center gap-1" type="button">
                    <MessageCircle className="w-4 h-4" />
                    {formalityLevel > 50 ? "Comment" : "Drop W"}
                  </button>
                  <button className="flex items-center gap-1" type="button">
                    <Heart className="w-4 h-4" />
                    {formalityLevel > 50 ? "Share" : "Show Rizz"}
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
