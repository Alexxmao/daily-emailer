import { useState, useEffect, useCallback } from "react";
import { Flex, Text } from '@chakra-ui/react';

export default function Home(){
  const quotes = [
    'Between your arms is home.', 
    'Your beauty is a flower, that blossoms within my heart, a sight so sweet and delicate, it tears my world apart.',
    'The moment I saw you, I knew that my life would never be the same.',
    'Come dance with me my love, let us twirl and spin, lost in the eyes of one another, moving to the beat of our hearts.',
    'Your eyes are like the oceans depths, your voice is like a sweet caress, your love is a rose in bloom, a beauty thhat will never fade or lose its perfume.',
    'Your voice is like a chorus of angels above, a melody so sweet, it filled me with love.',
    'With you every moment is like a dream, a fairytale that was more than it seemed.',
    'I never believed in love at first sight, until I met you. You stole my heart from the moment I saw you.',
    'You are a dream, a vision so true, a hope that I will always pursue.',
    'Looking at you makes me understand what love truly is.',
    'You are a miracle, a blessing so divine, that not even the vastness of the universe can contain thte beauty of your of your being.',
    'For you to look in the mirror, would be staring right at a beautiful soul.',
    'Love yourself my dear, with every flaw and fear, for there is noone in this world, as beautiful as you.',
    'I will love you endlessly',
    'Of all the stars that light the night sky, your radiance shines the brightest',
    'My heart is a garden, and you are the sun, with your love, I blossom, and our love story has just begun.',
    'When I look at the moon, all I can imagine, is your beautiful face smiling back.',
    'Like a work of art, my eyes cannot help bubt gaze upon the strokes of which god has created, for he envisioned a being as beautiful as you.',
    'Even in times when you think that you want to disappear, I will always come looking for you.',
    'I could write endlessly and yet it still would not be enough, for your beauty is beyond words.',
    'Oh darling, not even the gods themselves could stop me from loving you',
    'Like the seasons changing, and you return like autumn, I fall for you everytime.',
    'Till death do us part is cliche and incorrect. For my love for you is undying.',
    'Even if technology was a thousand years more advanced, nothing would be able to capture the beauty you hold.',
    'One will gaze to the sky in search of heaven, instead, I just look into your eyes.',
    'One glance into your eyes, and I saw my entire life.',
    'You drew memories in my mind I could never erase, and you painted colours in my heart, that I could never replace.',
    'I love you',
    'You are all I ever wanted love to be.',
    'You have always been my missing piece, even before we met.',
    'To quantify my love for you, would be to count the stars in the entire universe. Boundless.',
    'Late at night, when there is not a peep to be heard, your voice echos in my heart.',
    'I am so greatful that we met.',
    'If anything, I am yours.',
    'With every beat of my heart, I love you more and more.',
    'How strange the mind is, for me to dream of you, even while wide awake.',
    'My heart belongs to you and you only.',
    'My heart is so full of you, that I can hardly call it my own.',
    'A little birdy told me that I will love you forever.',
    'If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Only then would you realize how special you are to me.',
    'I could cross the mountains and the oceans caught in wanderlust, just to prove my devotion, and it still would not be enough',
    '<3',
    'Anything you want in life you will have, I guarantee it.',
    'In all the world, there is no heart for me like yours.',
    'If I know what love is, it is because of you.',
    'If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live a day without you.',
    'As we grow old, I hope that we do it together.',
    'I would rather spend one lifetime with you, than face all the ages of this world alone.',
    'I will love you forever, I will like you for always, as long as I am living, my baby you will be.',
    'There is something in the way you move, that attracts me like no other can.',
    'If god were to gift me eternal life, I would simply decline. For a life without you, is no different than death itself.'];

  const [quote, setNewQuote] = useState("I will love you forever and always");

  const changeQuote = useCallback(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setNewQuote(quotes[index])
  
  })
  
  const sendEmail = () => {
  fetch('/api/contactMessage',{
    method: 'POST',
    body: JSON.stringify(quote)
  
  })
  }
  
  useEffect(() => {
    const intervalID = setInterval(changeQuote, 86400000)
    return () => clearInterval(intervalID)
  }, [changeQuote])
  
  useEffect(() => {
    const intervalID = setInterval(shuffle, 86400000)
    return () => clearInterval(intervalID)
  }, [sendEmail])


  return(
    <Flex justifyContent="center" alignItems="center" py="45vh">
          <Text fontWeight="bold">{quote}</Text>
    </Flex>
  )
}
