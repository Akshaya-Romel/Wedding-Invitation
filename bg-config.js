/**
 * ============================================================================
 * SECTION BACKGROUND IMAGES  (loaded automatically by index.html / index2.html)
 * ============================================================================
 * HOW TO CHANGE A BACKGROUND:
 *   Option A: Save or replace your picture inside the `images/` folder using the
 *             numbered file names below:
 *               - Splash Screen       -> images/01-splash-bg.jpg
 *               - Hero Couple Art     -> images/02-hero-bg2.png (or images/02-hero-bg.jpg)
 *               - Our Families        -> images/03-families-bg.jpg
 *               - Our Journey         -> images/04-journey-bg.jpg
 *               - Haldi & Sangeet     -> images/05-haldi-sangeet-bg.jpg
 *               - Wedding Ceremony    -> images/06-ceremony-bg.jpg
 *               - Reception           -> images/07-reception-bg.jpg
 *               - Venue (Basilica)    -> images/08-venue-bg.jpg
 *               - RSVP Section        -> images/09-rsvp-bg.jpg
 *               - Thank You Section   -> images/10-thankyou-bg.jpg
 *
 *   Option B: Change `bgImage` below to any local file inside `images/` or any URL.
 *
 * AUTOMATIC FALLBACK:
 *   If a file listed in `bgImage` does not exist yet in the `images/` folder,
 *   the page automatically keeps that section's built-in celebration color shade
 *   and realistic floral illustrations so no section ever shows a blank background.
 * ============================================================================
 */
window.BACKGROUND_MUSIC_CONFIG = {
  title: "Dr. Dre - Still D.R.E. ft. Snoop Dogg",
  src: "audio/still-dre.m4a",
  fallbackSources: [
    "audio/still-dre.mp3",
    "images/still-dre.mp3",
    "audio/still-dre-instrumental.m4a",
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/b8/01/00b801d0-ca58-5b96-a07c-4933b6784ca6/mzaf_17927713563224179032.plus.aac.p.m4a"
  ],
  volume: 0.78
};

window.PAGE_BACKGROUNDS_CONFIG = {
  splashScreen: {
    elementId: "splash-screen",
    bgImage: "images/01-splash-bg.jpg",
    bgSize: "cover",
    bgPosition: "center center",
    overlayGradient: "radial-gradient(circle at 50% 18%, rgba(122,40,75,0.45) 0%, rgba(36,7,24,0.75) 100%)"
  },
  heroSection: {
    elementId: "hero-section",
    bgImage: "", // Keep "" so Hero keeps its pastel background while 02-hero-bg2.png / 02-hero-bg.jpg renders as the couple illustration
    bgSize: "cover",
    bgPosition: "center top",
    overlayGradient: "linear-gradient(180deg, rgba(245,225,223,0.45) 0%, rgba(230,235,226,0.55) 100%)"
  },
  familiesSection: {
    elementId: "families-section",
    bgImage: "images/03-families-bg.jpg",
    bgSize: "cover",
    bgPosition: "center center",
    overlayGradient: "linear-gradient(180deg, rgba(230,235,226,0.55) 0%, rgba(246,226,223,0.55) 100%)"
  },
  journeySection: {
    elementId: "journey-section",
    bgImage: "images/04-journey-bg.jpg",
    bgSize: "cover",
    bgPosition: "center center",
    overlayGradient: "linear-gradient(180deg, rgba(246,226,223,0.5) 0%, rgba(223,194,232,0.55) 100%)"
  },
  haldiSangeetSection: {
    elementId: "haldi-sangeet-section",
    bgImage: "images/05-haldi-sangeet-bg.jpg",
    bgSize: "cover",
    bgPosition: "center center",
    overlayGradient: "linear-gradient(180deg, rgba(15,5,22,0.28) 0%, rgba(15,5,22,0.36) 50%, rgba(10,4,18,0.32) 100%)"
  },
  ceremonySection: {
    elementId: "ceremony-section",
    bgImage: "images/06-ceremony-bg.jpg",
    bgSize: "cover",
    bgPosition: "center bottom",
    overlayGradient: "linear-gradient(180deg, rgba(234,225,211,0.48) 0%, rgba(250,245,236,0.48) 50%, rgba(216,224,212,0.52) 100%)"
  },
  receptionSection: {
    elementId: "reception-section",
    bgImage: "images/07-reception-bg.jpg",
    bgSize: "cover",
    bgPosition: "center bottom",
    overlayGradient: "linear-gradient(180deg, rgba(58,10,28,0.42) 0%, rgba(36,9,38,0.48) 55%, rgba(18,5,20,0.52) 100%)"
  },
  venueSection: {
    elementId: "venue-section",
    bgImage: "images/08-venue-bg.jpg",
    bgSize: "cover",
    bgPosition: "center bottom",
    overlayGradient: "linear-gradient(180deg, rgba(244,223,224,0.18) 0%, rgba(230,235,226,0.12) 100%)"
  },
  rsvpSection: {
    elementId: "rsvp-section",
    bgImage: "images/09-rsvp-bg.jpg",
    bgSize: "cover",
    bgPosition: "center center",
    overlayGradient: "linear-gradient(180deg, rgba(230,235,226,0.55) 0%, rgba(246,226,223,0.55) 100%)"
  },
  thankYouSection: {
    elementId: "thank-you-section",
    bgImage: "images/10-thankyou-bg.jpg",
    bgSize: "cover",
    bgPosition: "center bottom",
    overlayGradient: "linear-gradient(180deg, rgba(246,226,223,0.5) 0%, rgba(243,229,232,0.55) 100%)"
  },

  // Optional backgrounds for the 3 "A Story of Us" carousel cards
  storyChapter1: {
    bgImage: "",
    overlayGradient: "radial-gradient(circle, rgba(253,251,249,0.88) 0%, rgba(244,233,241,0.92) 100%)"
  },
  storyChapter2: {
    bgImage: "",
    overlayGradient: "radial-gradient(circle, rgba(253,251,249,0.88) 0%, rgba(244,233,241,0.92) 100%)"
  },
  storyChapter3: {
    bgImage: "",
    overlayGradient: "radial-gradient(circle, rgba(253,251,249,0.88) 0%, rgba(244,233,241,0.92) 100%)"
  }
};
