from flask import Flask, render_template, request ,jsonify
from src.pipeline.FP_predict_pipeline import PredictPipeline, CustomData
from src.pipeline.IR_predict_pipeline import IR_PredictPipeline, IR_CustomData
from src.logger import logging

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/predict-fertilizer', methods=['GET', 'POST'])
def predicting_fertilizer():
    try:
        if request.method == 'POST':

            node_data = request.get_json()
            print("Received from Node:", node_data)
           
            data = CustomData(
                N=float(node_data['N']),
                P=float(node_data['P']),
                K=float(node_data['K']),
                temperature=float(node_data['Temperature']),
                humidity=float(node_data['Humidity']),
                moisture=float(node_data['Moisture']),
                soil_type=node_data['SoilType'],
                crop=node_data['CropType']
            )

            
            pred_df = data.get_data_as_dataframe()
            predict_pipeline = PredictPipeline()
            results = predict_pipeline.predict(pred_df)
            logging.info(f"Prediction: {results}")

            if(results==0): results = "10-26-26"
            elif(results==1): results = "28-28"
            elif(results==2): results = "14-35-14"
            elif(results==3): results = "DAP"
            elif(results==4): results = "17-17-17"
            elif(results==5): results = "20-20"
            else: results = "Urea"

            
            return jsonify({'result':results})

    except Exception as e:
        logging.error(f"Error in prediction: {e}")
        return jsonify({ error:"Something went wrong. Please try again."})

    
    return render_template('index.html')

@app.route('/predict-irrigation', methods=['GET', 'POST'])
def predicting_irrigation():
    try:
        if request.method == 'POST':

            node_data = request.get_json()
            print("Received from Node:", node_data)
           
            data =IR_CustomData(
                Soil_Moisture=float(node_data['Moisture']),
                Temperature=float(node_data['Temperature']),
                Soil_Humidity=float(node_data['SoilHumidity']),
                Air_Humidity=float(node_data['AirHumidity']),
                Pressure=float(node_data['Pressure']),
            )

            
            pred_df = data.get_data_as_dataframe()
            predict_pipeline = IR_PredictPipeline()
            results = predict_pipeline.predict(pred_df)
            logging.info(f"Prediction: {results}")

            if(results==0): results = "DO NOT IRRIGATE"
            else: results = "IRRIGATE"
            

            
            return jsonify({'result':results})

    except Exception as e:
        logging.error(f"Error in prediction: {e}")
        return jsonify({ error:"Something went wrong. Please try again."})

    
    return render_template('index2.html')

if __name__ == "__main__":
    app.run(debug=True)
