const SurveyResultTable = ({ surveyData }) => {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 transition-colors duration-300">
        <table className="w-full border-collapse table-fixed text-left">
          <tbody>
            <tr className="bg-blue-500 dark:bg-blue-900 text-white">
              <td colSpan="4" className="py-2 px-4 font-bold">
                Response Number {surveyData.id}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Nickname
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.handleName}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td width="25%" className="py-2 px-4 font-semibold">
                Question 1. Age
              </td>
              <td width="25%" className="py-2 px-4 font-semibold">
                Question 2. Gender
              </td>
              <td width="25%" className="py-2 px-4 font-semibold">
                Question 3. Occupation
              </td>
              <td width="25%" className="py-2 px-4 font-semibold">
                Question 4. Residence
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td width="25%" className="py-2 px-4">
                {surveyData.age}
              </td>
              <td width="25%" className="py-2 px-4">
                {surveyData.gender}
              </td>
              <td width="25%" className="py-2 px-4">
                {surveyData.occupation}
              </td>
              <td width="25%" className="py-2 px-4">
                {surveyData.residence}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 5. How old were you when you first wore a fundoshi?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.firstTightenedAge}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 6. Was it for a specific event? If so, please tell us what the event was.
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.eventForFirstTightening}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 7. What type of fundoshi did you wear for the first time?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.firstTypeOfFundoshi}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 8. What were your thoughts when you first wore a fundoshi?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                <table className="w-full border-collapse table-fixed">
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                      <td width="50%" className="py-2 px-4 font-semibold">
                        １．About its coolness：
                      </td>
                      <td className="py-2 px-4">
                        {surveyData.impression.goodLooks}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                      <td className="py-2 px-4 font-semibold">
                        ２．About its comfort：
                      </td>
                      <td className="py-2 px-4">
                        {surveyData.impression.comfort}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                      <td className="py-2 px-4 font-semibold">
                        ３．About how easy it was to wear：
                      </td>
                      <td className="py-2 px-4">
                        {surveyData.impression.easeOfTying}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                      <td className="py-2 px-4 font-semibold">
                        ４．About feeling embarrassed：
                      </td>
                      <td className="py-2 px-4">
                        {surveyData.impression.shyness}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 9. Please share an episode from when you first wore a fundoshi.
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.episodeOfFirstTightening}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 10. Who taught you how to wear a fundoshi?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.learnedFrom}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 11. How old were you when you first became interested in fundoshi?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.ageWhenInterestedInFundoshi}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 12. What sparked your interest in fundoshi?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.reasonForInterestInFundoshi}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 13. Do you still wear a fundoshi now?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.currentlyTieFundoshi}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 14. When do you wear a fundoshi?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.whenToTieFundoshi}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 15. Please select all the types of fundoshi you have worn.
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.typesOfFundoshiTied.join(', ')}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 16. Which one is your favorite?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.favoriteFundoshi}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 17. What type of underwear do you usually wear?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.usualUnderwear}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 18. What type of swimwear do you usually wear?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.usualSwimsuit}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 19. Do your family or partner know that you wear a fundoshi?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.familyAwareness}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 20. For those who have worn Rokushaku Fundoshi (front pouch type), in which direction do you place your penis (little guy)?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.orientationForKokoro}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 21. (For women) It is said that fundoshi are quietly becoming a trend. What do you think?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4"></td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 22. (For men) It is said that women's fundoshi are quietly becoming a trend. What do you think?
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.opinionOnFemaleFundoshi}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 23. A message for those who have never worn a fundoshi:
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.messageToNonTiers}
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4 font-semibold">
                Question 24. Finally, one word about fundoshi!
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <td colSpan="4" className="py-2 px-4">
                {surveyData.finalThoughts}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SurveyResultTable;
  
  
  
  