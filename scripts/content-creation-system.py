#!/usr/bin/env python3
"""
FloFaction Content Creation System
Automated content creation for Insurance and Emergency Management YouTube channels
"""

import os
import json
import asyncio
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/content-creation.log'),
        logging.StreamHandler()
    ]
)

class ContentCreationSystem:
    def __init__(self):
        self.channels = {
            "insurance": {
                "name": "Insurance Mastery",
                "target_audience": "Insurance professionals, consumers, business owners",
                "content_types": ["educational", "tips", "reviews", "case_studies"],
                "video_count_target": 30,
                "shorts_count_target": 30
            },
            "emergency": {
                "name": "Emergency Management Pro", 
                "target_audience": "Emergency managers, safety professionals, general public",
                "content_types": ["preparedness", "training", "case_studies", "tips"],
                "video_count_target": 30,
                "shorts_count_target": 30
            }
        }
        
        self.content_templates = {
            "insurance": {
                "educational": {
                    "title_template": "Understanding {topic}: A Complete Guide to {insurance_type}",
                    "description_template": "Learn everything you need to know about {topic} in this comprehensive guide. We cover {key_points} and provide expert insights for {target_audience}.",
                    "outline_template": [
                        "Introduction to {topic}",
                        "Why {topic} matters for {target_audience}",
                        "Key concepts and definitions",
                        "Common mistakes to avoid",
                        "Best practices and tips",
                        "Real-world examples",
                        "Conclusion and next steps"
                    ],
                    "duration": "10-15 minutes",
                    "tags": ["insurance", "education", "tips", "guide"]
                },
                "tips": {
                    "title_template": "5 Essential {insurance_type} Tips Every {target_audience} Should Know",
                    "description_template": "Discover 5 crucial tips for {insurance_type} that can save you time and money. Perfect for {target_audience}.",
                    "outline_template": [
                        "Tip 1: {tip_1}",
                        "Tip 2: {tip_2}",
                        "Tip 3: {tip_3}",
                        "Tip 4: {tip_4}",
                        "Tip 5: {tip_5}",
                        "Bonus tip",
                        "Summary and action items"
                    ],
                    "duration": "5-8 minutes",
                    "tags": ["insurance", "tips", "advice", "money-saving"]
                },
                "reviews": {
                    "title_template": "{insurance_company} Review: Is It Right for {target_audience}?",
                    "description_template": "In-depth review of {insurance_company} covering coverage options, pricing, customer service, and more. Find out if it's the right choice for {target_audience}.",
                    "outline_template": [
                        "Company overview",
                        "Coverage options",
                        "Pricing analysis",
                        "Customer service review",
                        "Pros and cons",
                        "Who should choose this company",
                        "Final verdict and rating"
                    ],
                    "duration": "8-12 minutes",
                    "tags": ["insurance", "review", "comparison", "analysis"]
                },
                "case_studies": {
                    "title_template": "Real Case Study: How {client_type} Saved {amount} on {insurance_type}",
                    "description_template": "Real-world case study showing how {client_type} optimized their {insurance_type} coverage and saved {amount}. Learn from their experience.",
                    "outline_template": [
                        "Client background",
                        "Initial situation",
                        "Challenges faced",
                        "Solution implemented",
                        "Results achieved",
                        "Lessons learned",
                        "Key takeaways"
                    ],
                    "duration": "6-10 minutes",
                    "tags": ["insurance", "case-study", "savings", "optimization"]
                }
            },
            "emergency": {
                "preparedness": {
                    "title_template": "Emergency Preparedness Guide: {disaster_type} Safety Tips",
                    "description_template": "Complete guide to preparing for {disaster_type}. Learn essential safety tips, emergency supplies, and response procedures.",
                    "outline_template": [
                        "Understanding {disaster_type}",
                        "Risk assessment",
                        "Emergency supplies checklist",
                        "Evacuation planning",
                        "Communication plans",
                        "Recovery procedures",
                        "Resources and contacts"
                    ],
                    "duration": "12-15 minutes",
                    "tags": ["emergency", "preparedness", "safety", "disaster"]
                },
                "training": {
                    "title_template": "Emergency Response Training: {skill_topic} for {target_group}",
                    "description_template": "Professional training on {skill_topic} for {target_group}. Learn essential skills for emergency response and management.",
                    "outline_template": [
                        "Skill overview",
                        "Prerequisites",
                        "Step-by-step training",
                        "Practice exercises",
                        "Common mistakes",
                        "Certification requirements",
                        "Next steps"
                    ],
                    "duration": "10-15 minutes",
                    "tags": ["emergency", "training", "skills", "certification"]
                },
                "case_studies": {
                    "title_template": "Emergency Response Case Study: {incident_type} in {location}",
                    "description_template": "Detailed analysis of {incident_type} response in {location}. Learn from real emergency management scenarios.",
                    "outline_template": [
                        "Incident overview",
                        "Initial response",
                        "Challenges faced",
                        "Response strategies",
                        "Lessons learned",
                        "Improvements made",
                        "Best practices"
                    ],
                    "duration": "8-12 minutes",
                    "tags": ["emergency", "case-study", "response", "management"]
                },
                "tips": {
                    "title_template": "Emergency Safety Tips: {topic} for {target_audience}",
                    "description_template": "Essential safety tips for {topic}. Protect yourself and your family with these expert recommendations.",
                    "outline_template": [
                        "Why {topic} safety matters",
                        "Tip 1: {tip_1}",
                        "Tip 2: {tip_2}",
                        "Tip 3: {tip_3}",
                        "Tip 4: {tip_4}",
                        "Tip 5: {tip_5}",
                        "Summary and resources"
                    ],
                    "duration": "5-8 minutes",
                    "tags": ["emergency", "safety", "tips", "protection"]
                }
            }
        }
        
        self.content_topics = {
            "insurance": [
                "Auto Insurance Basics",
                "Home Insurance Coverage",
                "Life Insurance Planning",
                "Health Insurance Options",
                "Business Insurance Needs",
                "Insurance Claims Process",
                "Insurance Cost Optimization",
                "Insurance Policy Reviews",
                "Insurance Fraud Prevention",
                "Insurance Technology Trends"
            ],
            "emergency": [
                "Natural Disaster Preparedness",
                "Emergency Response Planning",
                "First Aid and Medical Emergencies",
                "Fire Safety and Prevention",
                "Severe Weather Safety",
                "Emergency Communication",
                "Evacuation Planning",
                "Emergency Supply Kits",
                "Business Continuity Planning",
                "Emergency Management Training"
            ]
        }
    
    async def create_content_plan(self):
        """Create comprehensive content plan for both channels"""
        logging.info("📋 Creating content plan for Insurance and Emergency Management channels")
        
        content_plans = {}
        
        for channel_key, channel_info in self.channels.items():
            logging.info(f"📺 Planning content for {channel_info['name']}")
            
            # Create content plan for this channel
            plan = await self.create_channel_content_plan(channel_key, channel_info)
            content_plans[channel_key] = plan
            
            # Save individual channel plan
            await self.save_channel_plan(channel_key, plan)
        
        # Save master content plan
        await self.save_master_plan(content_plans)
        
        return content_plans
    
    async def create_channel_content_plan(self, channel_key: str, channel_info: Dict) -> Dict:
        """Create content plan for specific channel"""
        plan = {
            "channel_name": channel_info["name"],
            "target_audience": channel_info["target_audience"],
            "content_types": channel_info["content_types"],
            "video_count_target": channel_info["video_count_target"],
            "shorts_count_target": channel_info["shorts_count_target"],
            "content_schedule": [],
            "topics": self.content_topics[channel_key],
            "templates": self.content_templates[channel_key],
            "creation_status": "planned",
            "created_date": datetime.now().isoformat()
        }
        
        # Generate content schedule
        content_schedule = await self.generate_content_schedule(channel_key, channel_info)
        plan["content_schedule"] = content_schedule
        
        return plan
    
    async def generate_content_schedule(self, channel_key: str, channel_info: Dict) -> List[Dict]:
        """Generate content schedule for channel"""
        schedule = []
        content_types = channel_info["content_types"]
        topics = self.content_topics[channel_key]
        
        # Generate long-form videos (30 videos)
        for i in range(channel_info["video_count_target"]):
            content_type = content_types[i % len(content_types)]
            topic = topics[i % len(topics)]
            
            video_content = {
                "id": f"{channel_key}_video_{i+1:03d}",
                "type": "long_form",
                "content_type": content_type,
                "topic": topic,
                "title": await self.generate_title(channel_key, content_type, topic),
                "description": await self.generate_description(channel_key, content_type, topic),
                "outline": await self.generate_outline(channel_key, content_type, topic),
                "duration": self.content_templates[channel_key][content_type]["duration"],
                "tags": self.content_templates[channel_key][content_type]["tags"],
                "scheduled_date": (datetime.now() + timedelta(days=i*2)).isoformat(),
                "status": "planned",
                "priority": "high" if i < 10 else "medium"
            }
            
            schedule.append(video_content)
        
        # Generate shorts (30 shorts)
        for i in range(channel_info["shorts_count_target"]):
            content_type = "tips"  # Most shorts are tips
            topic = topics[i % len(topics)]
            
            short_content = {
                "id": f"{channel_key}_short_{i+1:03d}",
                "type": "short_form",
                "content_type": content_type,
                "topic": topic,
                "title": await self.generate_short_title(channel_key, topic),
                "description": await self.generate_short_description(channel_key, topic),
                "outline": await self.generate_short_outline(channel_key, topic),
                "duration": "30-60 seconds",
                "tags": self.content_templates[channel_key][content_type]["tags"],
                "scheduled_date": (datetime.now() + timedelta(days=i*2, hours=12)).isoformat(),
                "status": "planned",
                "priority": "medium"
            }
            
            schedule.append(short_content)
        
        return schedule
    
    async def generate_title(self, channel_key: str, content_type: str, topic: str) -> str:
        """Generate title for content"""
        template = self.content_templates[channel_key][content_type]["title_template"]
        
        # Replace placeholders with actual values
        title = template.format(
            topic=topic,
            insurance_type="Insurance" if channel_key == "insurance" else "Emergency Management",
            target_audience=self.channels[channel_key]["target_audience"],
            tip_1=f"Essential {topic} Tip 1",
            tip_2=f"Essential {topic} Tip 2",
            tip_3=f"Essential {topic} Tip 3",
            tip_4=f"Essential {topic} Tip 4",
            tip_5=f"Essential {topic} Tip 5",
            insurance_company="Sample Insurance Company",
            client_type="Small Business Owner",
            amount="$5,000",
            disaster_type="Natural Disasters",
            skill_topic="Emergency Response",
            target_group="Professionals",
            incident_type="Emergency Response",
            location="Major City"
        )
        
        return title
    
    async def generate_description(self, channel_key: str, content_type: str, topic: str) -> str:
        """Generate description for content"""
        template = self.content_templates[channel_key][content_type]["description_template"]
        
        description = template.format(
            topic=topic,
            key_points=f"key concepts, best practices, and expert tips",
            target_audience=self.channels[channel_key]["target_audience"],
            insurance_type="Insurance" if channel_key == "insurance" else "Emergency Management",
            insurance_company="Sample Insurance Company",
            client_type="Small Business Owner",
            amount="$5,000",
            disaster_type="Natural Disasters",
            skill_topic="Emergency Response",
            target_group="Professionals",
            incident_type="Emergency Response",
            location="Major City"
        )
        
        return description
    
    async def generate_outline(self, channel_key: str, content_type: str, topic: str) -> List[str]:
        """Generate outline for content"""
        template = self.content_templates[channel_key][content_type]["outline_template"]
        
        outline = []
        for item in template:
            outline_item = item.format(
                topic=topic,
                insurance_type="Insurance" if channel_key == "insurance" else "Emergency Management",
                target_audience=self.channels[channel_key]["target_audience"],
                tip_1=f"Essential {topic} Tip 1",
                tip_2=f"Essential {topic} Tip 2",
                tip_3=f"Essential {topic} Tip 3",
                tip_4=f"Essential {topic} Tip 4",
                tip_5=f"Essential {topic} Tip 5",
                insurance_company="Sample Insurance Company",
                client_type="Small Business Owner",
                amount="$5,000",
                disaster_type="Natural Disasters",
                skill_topic="Emergency Response",
                target_group="Professionals",
                incident_type="Emergency Response",
                location="Major City"
            )
            outline.append(outline_item)
        
        return outline
    
    async def generate_short_title(self, channel_key: str, topic: str) -> str:
        """Generate title for short content"""
        if channel_key == "insurance":
            return f"Quick Tip: {topic} for Insurance"
        else:
            return f"Emergency Tip: {topic} Safety"
    
    async def generate_short_description(self, channel_key: str, topic: str) -> str:
        """Generate description for short content"""
        if channel_key == "insurance":
            return f"Quick insurance tip about {topic}. Save time and money with this simple advice!"
        else:
            return f"Essential safety tip for {topic}. Stay safe with this quick emergency advice!"
    
    async def generate_short_outline(self, channel_key: str, topic: str) -> List[str]:
        """Generate outline for short content"""
        return [
            "Hook: Attention-grabbing opening",
            "Main tip: Core advice",
            "Example: Real-world application",
            "Call to action: What to do next"
        ]
    
    async def save_channel_plan(self, channel_key: str, plan: Dict):
        """Save content plan for specific channel"""
        os.makedirs('content-plans', exist_ok=True)
        
        filename = f'content-plans/{channel_key}_content_plan.json'
        with open(filename, 'w') as f:
            json.dump(plan, f, indent=2)
        
        logging.info(f"💾 Saved content plan for {channel_key}: {filename}")
    
    async def save_master_plan(self, content_plans: Dict):
        """Save master content plan"""
        os.makedirs('content-plans', exist_ok=True)
        
        master_plan = {
            "creation_date": datetime.now().isoformat(),
            "total_channels": len(content_plans),
            "total_videos": sum(plan["video_count_target"] for plan in content_plans.values()),
            "total_shorts": sum(plan["shorts_count_target"] for plan in content_plans.values()),
            "channels": content_plans
        }
        
        filename = 'content-plans/master_content_plan.json'
        with open(filename, 'w') as f:
            json.dump(master_plan, f, indent=2)
        
        logging.info(f"💾 Saved master content plan: {filename}")
    
    async def create_content_scripts(self, content_plans: Dict):
        """Create detailed scripts for content"""
        logging.info("📝 Creating detailed content scripts")
        
        os.makedirs('content-scripts', exist_ok=True)
        
        for channel_key, plan in content_plans.items():
            channel_scripts = []
            
            for content_item in plan["content_schedule"]:
                script = await self.create_detailed_script(channel_key, content_item)
                channel_scripts.append(script)
            
            # Save channel scripts
            filename = f'content-scripts/{channel_key}_scripts.json'
            with open(filename, 'w') as f:
                json.dump(channel_scripts, f, indent=2)
            
            logging.info(f"📝 Created {len(channel_scripts)} scripts for {channel_key}")
    
    async def create_detailed_script(self, channel_key: str, content_item: Dict) -> Dict:
        """Create detailed script for content item"""
        script = {
            "id": content_item["id"],
            "title": content_item["title"],
            "description": content_item["description"],
            "type": content_item["type"],
            "duration": content_item["duration"],
            "outline": content_item["outline"],
            "detailed_script": await self.generate_detailed_script(channel_key, content_item),
            "visual_elements": await self.generate_visual_elements(channel_key, content_item),
            "call_to_action": await self.generate_call_to_action(channel_key, content_item),
            "tags": content_item["tags"],
            "scheduled_date": content_item["scheduled_date"],
            "status": "script_ready"
        }
        
        return script
    
    async def generate_detailed_script(self, channel_key: str, content_item: Dict) -> str:
        """Generate detailed script for content"""
        topic = content_item["topic"]
        content_type = content_item["content_type"]
        
        if content_item["type"] == "short_form":
            return f"""
[Hook - 5 seconds]
"Did you know that {topic} can save you thousands of dollars?"

[Main Tip - 20 seconds]
"Here's the key: {topic} is essential because it protects you from unexpected costs. 
The most important thing to remember is to always review your coverage annually."

[Example - 20 seconds]
"For example, if you're a small business owner, {topic} can mean the difference 
between staying in business and closing your doors after an emergency."

[Call to Action - 10 seconds]
"Subscribe for more {topic} tips and hit the bell for notifications!"
"""
        else:
            return f"""
[Introduction - 30 seconds]
"Welcome to {self.channels[channel_key]['name']}. Today we're diving deep into {topic}. 
Whether you're new to this or looking to optimize your current situation, 
this comprehensive guide will give you everything you need to know."

[Main Content - Based on outline]
{chr(10).join([f"- {item}" for item in content_item['outline']])}

[Conclusion - 30 seconds]
"That wraps up our guide to {topic}. Remember, the key is to take action on what you've learned. 
Don't forget to subscribe and hit the bell for more expert insights."
"""
    
    async def generate_visual_elements(self, channel_key: str, content_item: Dict) -> List[Dict]:
        """Generate visual elements for content"""
        visual_elements = [
            {
                "type": "intro_slide",
                "text": content_item["title"],
                "duration": "3 seconds",
                "style": "professional"
            },
            {
                "type": "outline_slide",
                "text": "What You'll Learn",
                "duration": "5 seconds",
                "style": "educational"
            }
        ]
        
        # Add visual elements for each outline point
        for i, outline_point in enumerate(content_item["outline"]):
            visual_elements.append({
                "type": "content_slide",
                "text": outline_point,
                "duration": "15 seconds",
                "style": "informative"
            })
        
        visual_elements.append({
            "type": "outro_slide",
            "text": "Subscribe for More Tips",
            "duration": "5 seconds",
            "style": "call_to_action"
        })
        
        return visual_elements
    
    async def generate_call_to_action(self, channel_key: str, content_item: Dict) -> Dict:
        """Generate call to action for content"""
        return {
            "primary": "Subscribe to our channel for more expert insights",
            "secondary": "Hit the bell icon for notifications",
            "tertiary": "Share this video with others who might benefit",
            "website": "Visit flofaction.com for professional services",
            "contact": "Contact us for personalized consultation"
        }

async def main():
    """Main execution function"""
    logging.info("🎬 Starting FloFaction Content Creation System")
    
    # Initialize content creation system
    content_system = ContentCreationSystem()
    
    try:
        # Create content plans
        content_plans = await content_system.create_content_plan()
        
        # Create detailed scripts
        await content_system.create_content_scripts(content_plans)
        
        logging.info("✅ Content creation system completed successfully")
        logging.info(f"📊 Created {sum(plan['video_count_target'] + plan['shorts_count_target'] for plan in content_plans.values())} content items")
        
    except Exception as e:
        logging.error(f"❌ Error in content creation: {str(e)}")

if __name__ == "__main__":
    asyncio.run(main())