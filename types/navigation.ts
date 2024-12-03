export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Agencies: undefined;
  Destinations: undefined;
  Splash : undefined;
  Login : undefined;
  SignUp : undefined;
  ArticlePage: {
    place: {
      id: number;
      title: string;
      image: any;
      location: string;
      description: string;
      rating: string;
      attractions: string[];
      bestTimeToVisit: string;
    };
  };
  ConversationListPage: undefined;
  Favourites:undefined;
  ConversationPage: {
    name: string;
    updateLastMessage: (id: string, message: string) => void;
    conversationId: string;
  }
};