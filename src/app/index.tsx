import { ScrollView, View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

// ─── Stub data ────────────────────────────────────────────────────────────────

const FILTERS = ['Drama', 'Comedy', 'Thriller', 'Sci-Fi', 'Romance'];

const FEATURED_SHOWS = ['Featured Show 1', 'Featured Show 2', 'Featured Show 3'];

const TOP10_SHOWS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const COLLECTIONS = [
  { title: 'Top Shows', shows: 4 },
  { title: 'Community Shows', shows: 4 },
  { title: 'New Shows', shows: 4 },
  { title: 'My Shows', shows: 4 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>For You</Text>
      <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
        <Text style={styles.searchIcon}>⌕</Text>
      </TouchableOpacity>
    </View>
  );
}

function FilterChips() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow} contentContainerStyle={styles.filterRowContent}>
      <TouchableOpacity style={styles.filterChipActive} onPress={() => {}}>
        <Text style={styles.filterChipActiveText}>Categories</Text>
      </TouchableOpacity>
      {FILTERS.map((f) => (
        <TouchableOpacity key={f} style={styles.filterChip} onPress={() => {}}>
          <Text style={styles.filterChipText}>{f}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function FeaturedCarousel() {
  const { width } = useWindowDimensions();
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.featuredCarousel}
    >
      {FEATURED_SHOWS.map((title) => (
        <TouchableOpacity key={title} style={[styles.featuredCard, { width }]} onPress={() => {}}>
          <View style={styles.featuredCardPlaceholder} />
          <View style={styles.featuredCardOverlay}>
            <Text style={styles.featuredShowTitle}>{title}</Text>
            <Text style={styles.featuredWatchNow}>Watch Now</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function CreateButton() {
  return (
    <TouchableOpacity style={styles.createButton} onPress={() => {}}>
      <Text style={styles.createButtonText}>+ Create</Text>
    </TouchableOpacity>
  );
}

function TellYourStorySection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tell your story</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowContent}>
        {[1, 2, 3, 4].map((i) => (
          <TouchableOpacity key={i} style={styles.storyCard} onPress={() => {}}>
            <View style={styles.storyCardPlaceholder} />
            <View style={styles.storyCardOverlay}>
              <Text style={styles.storyCardLabel}>Create Show</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function Top10Section() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Top 10 Shows</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowContent}>
        {TOP10_SHOWS.map((rank) => (
          <View key={rank} style={styles.top10Item}>
            <Text style={styles.top10Rank}>{rank}</Text>
            <View style={styles.top10Right}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.showPosterSmall} />
              </TouchableOpacity>
              <CreateButton />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function ShowCollection({ title, count }: { title: string; count: number }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowContent}>
        {Array.from({ length: count }).map((_, i) => (
          <View key={i} style={styles.showCard}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.showPoster} />
            </TouchableOpacity>
            <CreateButton />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

export default function HomeScreen() {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <View style={styles.root}>
      <SafeAreaView
        style={styles.safeArea}
        edges={['top']}
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
      >
        <Header />
        <FilterChips />
      </SafeAreaView>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Spacer derived from measured header height so content starts below the floating header */}
        <View style={{ height: headerHeight }} />

        <FeaturedCarousel />

        <View style={styles.sections}>
          <TellYourStorySection />
          <Top10Section />
          {COLLECTIONS.map((c) => (
            <ShowCollection key={c.title} title={c.title} count={c.shows} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const CARD_POSTER_W = 147;
const CARD_POSTER_H = 220;
const STORY_CARD_W = 160;
const STORY_CARD_H = 208;
const TOP10_POSTER_W = 107;
const TOP10_POSTER_H = 160;
const FEATURED_H = 512;
const PLACEHOLDER = '#191919';
const RED = '#FF0000';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  safeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 29,
    fontWeight: 'bold',
  },
  searchButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    color: '#fff',
    fontSize: 18,
  },

  // Filters
  filterRow: {
    maxHeight: 40,
  },
  filterRowContent: {
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterChipActive: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterChipActiveText: {
    color: '#000',
    fontSize: 13,
    fontWeight: '600',
  },
  filterChip: {
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterChipText: {
    color: '#fff',
    fontSize: 13,
  },

  // Featured carousel
  featuredCarousel: {
    height: FEATURED_H,
  },
  featuredCard: {
    height: FEATURED_H,
  },
  featuredCardPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: PLACEHOLDER,
  },
  featuredCardOverlay: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    gap: 4,
  },
  featuredShowTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  featuredWatchNow: {
    color: '#fff',
    fontSize: 15,
  },

  // Sections
  sections: {
    gap: 32,
    paddingTop: 32,
  },
  section: {
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  seeMore: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
  },
  rowContent: {
    paddingHorizontal: 16,
    gap: 12,
  },

  // Tell your story
  storyCard: {
    width: STORY_CARD_W,
    height: STORY_CARD_H,
    borderRadius: 12,
    overflow: 'hidden',
  },
  storyCardPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: PLACEHOLDER,
  },
  storyCardOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
  },
  storyCardLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Top 10
  top10Item: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  top10Rank: {
    color: '#fff',
    fontSize: 96,
    fontWeight: 'bold',
    letterSpacing: -12,
    lineHeight: 96,
    marginBottom: 4,
  },
  top10Right: {
    gap: 8,
    alignItems: 'center',
  },
  showPosterSmall: {
    width: TOP10_POSTER_W,
    height: TOP10_POSTER_H,
    borderRadius: 12,
    backgroundColor: PLACEHOLDER,
  },

  // Show collection
  showCard: {
    gap: 8,
    alignItems: 'center',
  },
  showPoster: {
    width: CARD_POSTER_W,
    height: CARD_POSTER_H,
    borderRadius: 12,
    backgroundColor: PLACEHOLDER,
  },

  // Create button
  createButton: {
    backgroundColor: RED,
    paddingHorizontal: 14,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
