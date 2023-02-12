
          <div
            className={
              "describeNeighborhood -- " +
              displayQuestion("recommendations") +
              " recommendationsScale" +
              " " +
              shakie
            }
          >
            <label>Evaluate the following aspects of {neighborhood}</label>

            <span className={styles.recomendations_span}>
              <label className={styles.label_recommendations}>
                Public Transportation:
              </label>
              <select
                id="transportation"
                className="inputCheck"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        publicTransport: {
                          ...formData.neighborhoodEvaluation[0].publicTransport,
                          satisfaction: e.target.value,
                        },
                      },
                    ],
                  });
                }}
                name="transportation"
              >
                <option value="">Select an option</option>
                <option className="whyGoodPublicTransport" value="Good">
                  Good
                </option>
                <option className="whyNeutralPublicTransport" value="Neutral">
                  Neutral
                </option>
                <option className="whyBadlPublicTransport" value="Bad">
                  Bad
                </option>
              </select>
            </span>

            <span className={styles.recomendations_span}>
              <label className={styles.label_recommendations}>Safety:</label>
              <select
                className="inputCheck"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        safety: {
                          ...formData.neighborhoodEvaluation[0].safety,
                          satisfaction: e.target.value,
                        },
                      },
                    ],
                  });
                }}
                name="safety"
              >
                <option value="">Select an option</option>
                <option className="whyGoodSafety" value="Good">
                  Good
                </option>
                <option className="whyNeutralSafety" value="Neutral">
                  Neutral
                </option>
                <option className="whyBadSafety" value="Bad">
                  Bad
                </option>
              </select>
            </span>

            <span className={styles.recomendations_span}>
              <label className={styles.label_recommendations}>
                Food Options:
              </label>
              <select
                className="inputCheck"
                name="food"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        food: {
                          ...formData.neighborhoodEvaluation[0].food,
                          satisfaction: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              >
                <option value="">Select an option</option>
                <option className="whyGoodFood" value="Good">
                  Good
                </option>
                <option className="whyNeutralFood" value="Neutral">
                  Neutral
                </option>
                <option className="whyBadFood" value="Bad">
                  Bad
                </option>
              </select>
            </span>

            <span className={styles.recomendations_span}>
              <label className={styles.label_recommendations}>
                Night Life:
              </label>
              <select
                className="inputCheck"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        nightLife: {
                          ...formData.neighborhoodEvaluation[0].nightLife,
                          satisfaction: e.target.value,
                        },
                      },
                    ],
                  });
                }}
                name="nighLife"
              >
                <option value="">Select an option</option>
                <option className="whyGoodNighLife" value="Good">
                  Good
                </option>
                <option className="whyNeutralNightLife" value="Neutral">
                  Neutral
                </option>
                <option className="whyBadNightLife" value="Bad">
                  Bad
                </option>
              </select>
            </span>
          </div>














          <div
            className={
              "recommendations favoritePlaces containerOfRecommendations " +
              displayQuestion("recommendationsExplainContainer") +
              " " +
              shakie
            }
          >
            <div
              className={
                "whyGoodPublicTransport " + styles.recomendationsExplanation
              }
            >
              <div className={styles.recommendationsHeaders}>
                Why do you feel good about public transportation in
                <span className="nhoodName"> {neighborhood}</span>?
              </div>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        publicTransport: {
                          ...formData.neighborhoodEvaluation[0].publicTransport,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div
              className={
                "whyNeutralPublicTransport " + styles.recomendationsExplanation
              }
            >
              <div className={styles.recommendationsHeaders}>
                Why do you feel neutral about public transportation in
                <span className="nhoodName"> {neighborhood}</span>?
              </div>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        publicTransport: {
                          ...formData.neighborhoodEvaluation[0].publicTransport,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div
              className={
                "whyBadlPublicTransport " + styles.recomendationsExplanation
              }
            >
              <p className={styles.recommendationsHeaders}>
                Why do you feel bad about public transportation in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        publicTransport: {
                          ...formData.neighborhoodEvaluation[0].publicTransport,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>

            <div
              className={"whyGoodSafety " + styles.recomendationsExplanation}
            >
              <p className={styles.recommendationsHeaders}>
                Why do you feel good about safety in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        safety: {
                          ...formData.neighborhoodEvaluation[0].safety,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div
              className={"whyNeutralSafety " + styles.recomendationsExplanation}
            >
              <p className={styles.recommendationsHeaders}>
                Why do you feel neutral about safety in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        safety: {
                          ...formData.neighborhoodEvaluation[0].safety,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div className={"whyBadSafety " + styles.recomendationsExplanation}>
              <p className={styles.recommendationsHeaders}>
                Why do you feel bad about safety in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        safety: {
                          ...formData.neighborhoodEvaluation[0].safety,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div className={"whyGoodFood " + styles.recomendationsExplanation}>
              <p className={styles.recommendationsHeaders}>
                Why do you feel good about the food options in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        food: {
                          ...formData.neighborhoodEvaluation[0].food,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div
              className={"whyNeutralFood " + styles.recomendationsExplanation}
            >
              <p className={styles.recommendationsHeaders}>
                Why do you feel neutral about the food options in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        food: {
                          ...formData.neighborhoodEvaluation[0].food,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div className={"whyBadFood " + styles.recomendationsExplanation}>
              <p className={styles.recommendationsHeaders}>
                Why do you feel bad about the food options in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        food: {
                          ...formData.neighborhoodEvaluation[0].food,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div
              className={"whyGoodNighLife " + styles.recomendationsExplanation}
            >
              <p className={styles.recommendationsHeaders}>
                Why do you feel good about night life in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        nightLife: {
                          ...formData.neighborhoodEvaluation[0].nightLife,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div
              className={
                "whyNeutralNightLife " + styles.recomendationsExplanation
              }
            >
              <p className={styles.recommendationsHeaders}>
                Why do you feel neutral about night life in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        nightLife: {
                          ...formData.neighborhoodEvaluation[0].nightLife,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
            <div
              className={"whyBadNightLife " + styles.recomendationsExplanation}
            >
              <p className={styles.recommendationsHeaders}>
                Why do you feel bad about night life in
                <span className="nhoodName"> {neighborhood}</span>?
              </p>
              <textarea
                name="transportation_explanation"
                className={
                  styles.textAreaRecommendationDescription + " inputCheck"
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    neighborhoodEvaluation: [
                      {
                        ...formData.neighborhoodEvaluation[0],
                        nightLife: {
                          ...formData.neighborhoodEvaluation[0].nightLife,
                          explanation: e.target.value,
                        },
                      },
                    ],
                  });
                }}
              ></textarea>
            </div>
          </div>
