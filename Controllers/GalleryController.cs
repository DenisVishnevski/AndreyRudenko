using Microsoft.AspNetCore.Mvc;

namespace AndreyRudenko.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GalleryController : ControllerBase
    {
        private string sourceDirectory = @"ClientApp\public\appGallery";
        private List<string> sourceList = new List<string>();
        public List<string> Get()
        {
            string[] allFiles = Directory.GetFiles(sourceDirectory);
            foreach (string filePath in allFiles)
            {
                string fileName = Path.GetFileName(filePath);
                sourceList.Add(fileName);
            }
            return sourceList;
        }
    }
}
