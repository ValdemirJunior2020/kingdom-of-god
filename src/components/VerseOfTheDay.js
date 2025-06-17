import React from 'react';

const verses = [
  { text: "You are a chosen generation, a royal priesthood...", ref: "1 Peter 2:9" },
  { text: "The Spirit of the Lord is upon me, because He has anointed me...", ref: "Luke 4:18" },
  { text: "Behold, I give you authority... over all the power of the enemy.", ref: "Luke 10:19" },
  { text: "Greater is He who is in you than he who is in the world.", ref: "1 John 4:4" },
  { text: "We are more than conquerors through Him who loved us.", ref: "Romans 8:37" },
  { text: "As He is, so are we in this world.", ref: "1 John 4:17" },
  { text: "The righteous are bold as a lion.", ref: "Proverbs 28:1" },
  { text: "You did not receive a spirit of slavery... but of adoption.", ref: "Romans 8:15" },
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { text: "The kingdom of God is not talk, but power.", ref: "1 Corinthians 4:20" },
  { text: "Your body is a temple of the Holy Spirit...", ref: "1 Corinthians 6:19" },
  { text: "You are the light of the world. A city on a hill cannot be hidden.", ref: "Matthew 5:14" },
  { text: "No weapon formed against you shall prosper...", ref: "Isaiah 54:17" },
  { text: "God has not given us a spirit of fear, but of power...", ref: "2 Timothy 1:7" },
  { text: "If God is for us, who can be against us?", ref: "Romans 8:31" },
  { text: "He who is in you is greater than he who is in the world.", ref: "1 John 4:4" },
  { text: "You are the salt of the earth...", ref: "Matthew 5:13" },
  { text: "The Lord is my light and my salvation—whom shall I fear?", ref: "Psalm 27:1" },
  { text: "You are sons of the Most High.", ref: "Luke 6:35" },
  { text: "Those who are led by the Spirit of God are the children of God.", ref: "Romans 8:14" },
  { text: "We are Christ’s ambassadors...", ref: "2 Corinthians 5:20" },
  { text: "Let your light shine before others...", ref: "Matthew 5:16" },
  { text: "In all these things we are more than conquerors...", ref: "Romans 8:37" },
  { text: "Arise, shine, for your light has come...", ref: "Isaiah 60:1" },
  { text: "They will lay hands on the sick and they will recover.", ref: "Mark 16:18" },
  { text: "Whatever you bind on earth will be bound in heaven...", ref: "Matthew 18:18" },
  { text: "Submit to God. Resist the devil, and he will flee from you.", ref: "James 4:7" },
  { text: "I have been crucified with Christ... and Christ lives in me.", ref: "Galatians 2:20" },
  { text: "Where the Spirit of the Lord is, there is freedom.", ref: "2 Corinthians 3:17" },
  { text: "He who began a good work in you will complete it...", ref: "Philippians 1:6" },
  { text: "Walk by the Spirit, and you will not gratify the desires of the flesh.", ref: "Galatians 5:16" },
  { text: "Blessed are the peacemakers, for they shall be called sons of God.", ref: "Matthew 5:9" },
  { text: "I will pour out my Spirit on all people...", ref: "Joel 2:28" },
  { text: "Go and make disciples of all nations...", ref: "Matthew 28:19" },
  { text: "The Spirit helps us in our weakness...", ref: "Romans 8:26" },
  { text: "He has rescued us from the dominion of darkness...", ref: "Colossians 1:13" },
  { text: "You are seated with Christ in heavenly places.", ref: "Ephesians 2:6" },
  { text: "The same Spirit that raised Jesus from the dead lives in you.", ref: "Romans 8:11" },
  { text: "Put on the full armor of God...", ref: "Ephesians 6:11" },
  { text: "He has given us everything we need for life and godliness.", ref: "2 Peter 1:3" },
  { text: "The Lord is a warrior; the Lord is His name.", ref: "Exodus 15:3" },
  { text: "The battle is the Lord’s.", ref: "1 Samuel 17:47" },
  { text: "Let the redeemed of the Lord say so...", ref: "Psalm 107:2" },
  { text: "The steps of a righteous man are ordered by the Lord.", ref: "Psalm 37:23" },
  { text: "He crowns you with love and compassion.", ref: "Psalm 103:4" },
  { text: "Do not be conformed to this world...", ref: "Romans 12:2" },
  { text: "You are fearfully and wonderfully made.", ref: "Psalm 139:14" },
  { text: "Call to me and I will answer you...", ref: "Jeremiah 33:3" },
  { text: "Those who wait on the Lord shall renew their strength.", ref: "Isaiah 40:31" }
];

const VerseOfTheDay = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const verse = verses[dayOfYear % verses.length];

  const encodedVerse = encodeURIComponent(`"${verse.text}" — ${verse.ref}`);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedVerse}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com&quote=${encodedVerse}`;

  return (
    <div
      className="bg-dark text-white p-4 rounded mb-4 mx-auto animate__animated animate__fadeIn"
      style={{ maxWidth: '500px' }}
    >
      <h4 className="fw-bold">Verse of the Day</h4>
      <p className="fs-5 mb-1"><em>"{verse.text}"</em></p>
      <small className="d-block mb-3">— {verse.ref}</small>

      <div className="d-flex gap-2">
        <a
          className="btn btn-success btn-sm"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Share on WhatsApp
        </a>
        <a
          className="btn btn-primary btn-sm"
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          👍 Share on Facebook
        </a>
      </div>
    </div>
  );
};

export default VerseOfTheDay;
